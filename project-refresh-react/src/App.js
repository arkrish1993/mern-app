import React, { useState } from "react";
import "./App.css";
import AddNewGoal from "./components/AddNewGoal/AddNewGoal";
import GoalList from "./components/GoalList/GoalList";

const App = () => {
  const [goals, setGoals] = useState([]);
  const addGoalHandler = (goal) => {
    setGoals((prevState) => [
      ...prevState,
      {
        id: prevState.length + 1,
        text: goal,
      },
    ]);
  };

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <AddNewGoal onAddGoal={addGoalHandler} />
      <GoalList goals={goals} />
    </div>
  );
};

export default App;
