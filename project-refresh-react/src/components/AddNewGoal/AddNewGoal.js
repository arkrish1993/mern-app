import { useState } from "react";

const AddNewGoal = (props) => {
  const [goal, setGoal] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddGoal(goal);
    setGoal("");
  };

  const onChangeHandler = (event) => {
    setGoal(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        required
        id="goal"
        type="text"
        value={goal}
        onChange={onChangeHandler}
      />
      <button>Add</button>
    </form>
  );
};

export default AddNewGoal;
