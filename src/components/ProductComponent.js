import React from "react";
import { useSelector } from "react-redux";
function ProductComponent() {
  const products = useSelector((state) => state.product.products);
  const renderList = products.map((p) => {
    const { id, title, image, price, category } = p;
    return (
      <div className="four wide column" key={id}>
        <div className="ui link cards">
          <div className="card">
            <div className="image">
              <img src={image} alt={title} />
            </div>
            <div className="content">
              <div className="header">{title}</div>
              <div className="meta price">$ {price}</div>
              <div className="meta">{category}</div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <>{renderList}</>;
}

export default ProductComponent;
