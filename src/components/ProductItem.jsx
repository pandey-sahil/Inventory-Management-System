import React from 'react'

const ProductItem = ({ product, onDelete, onEdit, index }) => {
  return (
    <div>
        <li className="flex justify-between items-center text-white bg-gray-800 p-5 rounded-lg py-2 border">
            {`${product.name} - $${product.price.toFixed(2)}`}
            <div>
                <button onClick={() => onEdit(index)} className="bg-yellow-500 text-white p-2 rounded mr-2">
                    Edit
                </button>
                <button onClick={() => onDelete(index)} className="bg-red-500 text-white p-2 rounded">
                    Delete
                </button>
            </div>
        </li>
    </div>
  )
}

export default ProductItem