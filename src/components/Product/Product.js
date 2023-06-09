import styles from "./Product.module.scss";
import { useMemo, useState } from "react";
import shortid from "shortid";
import ProductImage from "../ProductImage/ProductImage";
import ProductForm from "../ProductForm/ProductForm";

const Product = (props) => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const calculation = useMemo(() => {
    const selectSize = props.sizes.find(({ name }) => name === currentSize);
    console.log(selectSize.additionalPrice);
    return props.basePrice + selectSize.additionalPrice;
  }, [currentSize]);

  const addToCart = (e) => {
    e.preventDefault();
    const summary = {
      id: shortid(),
      Name: props.title,
      Price: calculation,
      Size: currentSize,
      Color: currentColor,
    };
    console.log("Summary" + "\n" + "=============" + "\n", summary);
  };

  const changeSize = (selectedSize) => {
    setCurrentSize(selectedSize);
  };

  const changeColor = (selectedColor) => {
    setCurrentColor(selectedColor);
  };

  return (
    <article className={styles.product}>
      <ProductImage name={props.name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {calculation} $</span>
        </header>

        <ProductForm
          obj={props}
          action={addToCart}
          currentSize={currentSize}
          currentColor={currentColor}
          changeSize={changeSize}
          changeColor={changeColor}
        ></ProductForm>
      </div>
    </article>
  );
};

export default Product;
