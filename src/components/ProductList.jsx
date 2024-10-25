import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products, onDelete, onEdit }) => {
    return (
        <ul className="list-none p-0">
            {products.map((product, index) => (
                <ProductItem
                    key={index}
                    product={product}
                    onDelete={onDelete}
                    onEdit={onEdit}
                    index={index}
                />
            ))}
        </ul>
    );
};

export default ProductList;
