import GoalItem from "../GoalItem/GoalItem";

const GoalList = (props) => {
  return (
    <ul className="goal-list">
      {props.goals.map((goal) => (
        <GoalItem key={goal.id} goal={goal.text} />
      ))}
    </ul>
  );
};

export default GoalList;
