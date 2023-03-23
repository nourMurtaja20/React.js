import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import "./Index.css";
import { counterActions } from "./redux/redux-store";
const Counter = () => {
  let counter = useSelector((state) => state.counter); // singleReducer
  let visible = useSelector((state) => state.visible); // singleReducer
  // let counter = useSelector((state) => state.counterReducer.counter); // multiReducer
  // let visible = useSelector((state) => state.counterReducer.visible); // multiReducer
  let dispatch = useDispatch();

  let incrementActionHandler = () => {
    dispatch(counterActions.increment());
  };
  let decrementActionHandler = () => {
    dispatch(counterActions.decrement());
  };
  let incrementByValueActionHandler = () => {
    dispatch(counterActions.incrementByValue(10));
  };
  let toggleActionHandler = () => {
    dispatch(counterActions.toggle());
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {visible && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementActionHandler}>Increment</button>
        <button onClick={incrementByValueActionHandler}>Increase by 10</button>
        <button onClick={decrementActionHandler}>Decrement</button>
      </div>
      <button onClick={toggleActionHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
