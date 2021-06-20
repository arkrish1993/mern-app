import { useForm } from "../../hooks/form-hook";
import Button from "../../shared/components/Form/Button";
import Input from "../../shared/components/Form/Input";
import Card from "../../shared/components/UI/Card";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import "./Auth.css";

const Auth = (props) => {
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <Card className="authentication">
      <h2>Login Required</h2>
      <hr />
      <form onSubmit={submitHandler}>
        <Input
          id="email"
          type="email"
          label="E-mail Address"
          element="input"
          errorText="Please enter a valid email address."
          validators={[VALIDATOR_EMAIL()]}
          onInput={inputHandler}
        />
        <Input
          id="password"
          type="password"
          label="Password"
          element="input"
          errorText="The password should be at least 6 characters long."
          validators={[VALIDATOR_MINLENGTH(6)]}
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          LOGIN
        </Button>
      </form>
    </Card>
  );
};

export default Auth;
