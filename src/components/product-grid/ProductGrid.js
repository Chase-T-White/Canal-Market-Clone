import React, { useState } from "react";
import "./productGrid.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ProductGrid = ({ productArray }) => {
  const [top, setTop] = useState(10);
  const [left, setLeft] = useState(10);
  const [opacity, setOpacity] = useState(0);

  const showImg = () => {
    setTop(Math.random() * 81 + 10 + "%");
    setLeft(Math.random() * 81 + 10 + "%");
    setOpacity(1);
  };

  return (
    <section className='product-grid'>
      {productArray.map((product) => {
        return (
          <div
            key={product.id}
            className='product-grid__cell'
            onMouseEnter={product.img ? showImg : null}
            onMouseLeave={() => setOpacity(0)}
          >
            <p className='product__category'>{product.category}</p>
            <p className='product__name'>{product.item}</p>
            {product.img ? (
              <LazyLoadImage
                src={product.img}
                placeholderSrc={product.placeHolderImg}
                effect='blur'
                alt={product.imgAlt}
                className='product__img'
                style={{ top, left, opacity }}
              />
            ) : null}
          </div>
        );
      })}
    </section>
  );
};

export default ProductGrid;
