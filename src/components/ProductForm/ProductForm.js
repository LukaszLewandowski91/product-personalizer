import styles from "./ProductForm.module.scss";
import OptionSize from "../OptionSize/OptionSize";

const ProductForm = ({
  obj,
  currentSize,
  currentColor,
  action,
  selectSize,
}) => {
  return (
    <form onSubmit={action}>
      <OptionSize
        sizes={obj.sizes}
        currentSize={currentSize}
        action={selectSize}
      />
    </form>
  );
};

export default ProductForm;
