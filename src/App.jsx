import "./index.css"
import {products} from "./Data.js"


function ItemProduct({product}) {
  return (
    <div className="col-6 col-xl-3 col-sm-6">
      <div className="product-card">
        <div className="product-image">
          <div className="image">
            <img src={product.thumbnail} alt={product.title} />
          </div>
          <div className="discount">{Math.round(product.discountPercentage)}%</div>
          <div className="rating">{product.rating}</div>
        </div>
        <div className="product-info">
          <div className="product-name">{product.title}</div>
          <div className="product-price">Giá: {product.price}$</div>
          <div className="stock-brand">
            <div className="stock">Còn: {product.stock} sp</div>
            <div className="brand">Brand: {product.brand}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export function MainProduct(){
  const items = products.map((product) => (<ItemProduct key={product.id} product={product}/>));
  return (
    <div className="container">
      <div className="row">
        {items}
      </div>
    </div>
  )
}