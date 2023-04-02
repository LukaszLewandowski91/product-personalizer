import styles from "./ProductForm.module.scss";
import OptionSize from "../OptionSize/OptionSize";
import OptionColor from "../OptionColor/OptionColor";
import Button from "../Button/Button";
import PropTypes from "prop-types";

const ProductForm = ({
  obj,
  action,
  currentSize,
  currentColor,
  changeSize,
  changeColor,
  changePrice,
}) => {
  return (
    <form onSubmit={action}>
      <OptionSize
        sizes={obj.sizes}
        currentSize={currentSize}
        action={changeSize}
        changePrice={changePrice}
      />
      <OptionColor
        colors={obj.colors}
        currentColor={currentColor}
        action={changeColor}
      />
      <Button className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  );
};

ProductForm.propTypes = {
  obj: PropTypes.object.isRequired,
  action: PropTypes.func.isRequired,
  currentSize: PropTypes.string.isRequired,
  currentColor: PropTypes.string.isRequired,
  changeSize: PropTypes.func.isRequired,
  changeColor: PropTypes.func.isRequired,
};
export default ProductForm;
