import styles from "styled-components";

const Input = ({ placeholder, type }) => {
  return (
    <div>
      <input placeholder={placeholder} type={type} />
    </div>
  );
};

export default Input;
