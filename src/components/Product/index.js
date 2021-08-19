import React from "react"

const Product = ({ nodeId, product, loading, handleClick }) => {
  // Return
  return (
    <div className="product-item" key={nodeId}>
      <img
        className="product-image"
        src={product.images[0]}
        alt={product.name}
      />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <button
        className="button"
        type="button"
        disabled={loading}
        onClick={event => handleClick(event, nodeId)}
      >
        Buy
      </button>
    </div>
  )
}

export default Product
