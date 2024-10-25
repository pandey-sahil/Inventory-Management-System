import React, { useState, useEffect } from 'react';
import ProductForm from './ProductForm';
import ProductItem from './ProductItem'; 
import ProductList from './ProductList';

const LocalStorage = () => {
    const [products, setProducts] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
        setProducts(storedProducts);
    }, []);

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products));
    }, [products]);

    const handleAddProduct = (newProduct) => {
        if (editingIndex !== null) {
            const updatedProducts = products.map((product, index) =>
                index === editingIndex ? newProduct : product
            );
            setProducts(updatedProducts);
            setEditingIndex(null);
        } else {
            setProducts((prevProducts) => [...prevProducts, newProduct]);
        }
    };

    const handleEditProduct = (index) => {
        setEditingIndex(index);
    };

    const handleDeleteProduct = (index) => {
        const newProducts = products.filter((_, i) => i !== index);
        setProducts(newProducts);
    };

    return (
        <div className="p-6 max-w-md mx-auto bg-gray-800 text-white rounded-xl shadow-md">
            <h1 className="text-2xl text-white font-bold mb-4">Product List</h1>
            <ProductForm onAddProduct={handleAddProduct} editingProduct={editingIndex !== null ? products[editingIndex] : null} />
            <ProductList products={products} onDelete={handleDeleteProduct} onEdit={handleEditProduct} />
        </div>
    );
};

export default LocalStorage;
