import { useEffect } from "react";
import { useReducer } from "react";
import { validate } from "../../util/validators";
import "./Input.css";

const defaultValue = { value: "", isValid: false, isTouched: false };

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCH":
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatchInput] = useReducer(inputReducer, defaultValue);
  const { value, isValid } = inputState;
  const { id, onInput } = props;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, onInput, value, isValid]);

  const changeHandler = (event) => {
    dispatchInput({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators,
    });
  };

  const touchHandler = (event) => {
    dispatchInput({
      type: "TOUCH",
    });
  };

  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    );

  const isInvalid = !inputState.isValid && inputState.isTouched;
  return (
    <div
      className={`form-control ${props.className} ${
        isInvalid ? "form-control--invalid" : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {isInvalid && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;
