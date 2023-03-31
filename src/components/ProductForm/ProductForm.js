import styles from "./ProductForm.module.scss";
import OptionSize from "../OptionSize/OptionSize";
import OptionColor from "../OptionColor/OptionColor";
import Button from "../Button/Button";

const ProductForm = ({
  obj,
  action,
  currentSize,
  currentColor,
  selectSize,
  selectColor,
}) => {
  return (
    <form onSubmit={action}>
      <OptionSize
        sizes={obj.sizes}
        currentSize={currentSize}
        action={selectSize}
      />
      <OptionColor
        colors={obj.colors}
        currentColor={currentColor}
        action={selectColor}
      />
      <Button className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  );
};

export default ProductForm;
