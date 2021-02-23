import styles from "styled-components";

const Input = ({ placeholder, type }) => {
  const Container = styles.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const InputEle = styles.input`
    background: #f5f5f5;
    box-shadow: 10px 14px 31px -23px rgba(255, 100, 150, 0.25);
    border: none;
    border-radius: 8px;
    margin: 0.5rem 0;
    width: 80%;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    padding: 0 1rem;
    color: #9D9D9D;

    transition: all 0.2s ease-in;

    &:hover{
      transform: translateY(-3px);
      cursor: pointer;
    }

    &:focus{
      color: #343434;
    }
  `;

  const Status = styles.div`
  height: 10px;
  width: 10px;
  background: #9d9d9d;
  border-radius: 10px;
  margin-left: 1rem;

  ${InputEle}:focus + &{
    background: #ffa689;
  }

  ${InputEle}:invalid + &{
    background: #FE2F75;
  }

  ${InputEle}:valid + &{
    background: #70EDB9;
  }
  `;

  return (
    <Container>
      <InputEle
        placeholder={placeholder && placeholder}
        type={type ? type : "text"} required autoComplete="off"
      />
      <Status />
    </Container>
  );
};

export default Input;
