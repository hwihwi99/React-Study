const Button = (props) => {
  console.log(props);
  const onClickButton = () => {
    console.log(props);
  };

  return (
    <button style={{ color: props.color }} onClick={onClickButton}>
      {props.text} - {props.color}
    </button>
  );
};

// props에 값이 없을 때, default로 지정해준다. (없다고 가정하기엔 위험하므로)
Button.defaultProps = {
  color: "black",
};

export default Button;
