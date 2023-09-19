import React from 'react'
import { product } from "../product";
function Image() {
  return (
      <div>
          <img src={product.url } />
      </div>
  )
}

export default Image