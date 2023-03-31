import styles from "./Product.module.scss";
import clsx from "clsx";
import Button from "../Button/Button";
import PropTypes from "prop-types";
import { useState } from "react";
import shortid from "shortid";
import ProductImage from "../ProductImage/ProductImage";
import ProductForm from "../ProductForm/ProductForm";
import OptionSize from "../OptionSize/OptionSize";

const Product = (props) => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const prepareColorClassName = (color) => {
    return styles[
      "color" + color[0].toUpperCase() + color.substr(1).toLowerCase()
    ];
  };

  const getPrice = () => {
    const selectSize = props.sizes.find(({ name }) => name === currentSize);
    return props.basePrice + selectSize.additionalPrice;
  };

  const addToCart = (e) => {
    e.preventDefault();
    const summary = {
      id: shortid(),
      Name: props.title,
      Price: getPrice(),
      Size: currentSize,
      Color: currentColor,
    };
    console.log("Summary" + "\n" + "=============" + "\n", summary);
  };

  const changeSize = (selectedSize) => {
    setCurrentSize(selectedSize);
  };

  return (
    <article className={styles.product}>
      <ProductImage name={props.name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()} $</span>
        </header>

        <ProductForm
          obj={props}
          action={addToCart}
          currentSize={currentSize}
          currentColor={currentColor}
          selectSize={changeSize}
        ></ProductForm>

        {/* <form onSubmit={addToCart}>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map((size) => (
                <li key={size.name}>
                  <button
                    type="button"
                    className={clsx(currentSize === size.name && styles.active)}
                    onClick={() => setCurrentSize(size.name)}
                  >
                    {size.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map((color) => (
                <li key={color}>
                  <button
                    type="button"
                    className={clsx(
                      prepareColorClassName(color),
                      currentColor === color && styles.active
                    )}
                    onClick={() => setCurrentColor(color)}
                  ></button>
                </li>
              ))}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form> */}
      </div>
    </article>
  );
};

Product.propTypes = {
  title: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
  basePrice: PropTypes.number.isRequired,
};

export default Product;
