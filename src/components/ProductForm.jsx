import React, { useState } from 'react';

const ProductForm = ({ onAddProduct, editingProduct, onEditProduct }) => {
    const [productName, setProductName] = useState(editingProduct ? editingProduct.name : '');
    const [productPrice, setProductPrice] = useState(editingProduct ? editingProduct.price : '');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (productName && productPrice) {
            onAddProduct({ name: productName, price: parseFloat(productPrice) });
            setProductName('');
            setProductPrice('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="Product Name"
                required
                className="border border-gray-300 p-2 rounded w-full mb-2"
            />
            <input
                type="number"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                placeholder="Price"
                required
                min="0"
                step="0.01"
                className="border border-gray-300 p-2 rounded w-full mb-2"
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
                {editingProduct ? 'Update Product' : 'Add Product'}
            </button>
        </form>
    );
};

export default ProductForm;
