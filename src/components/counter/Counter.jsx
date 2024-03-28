import { useSelector, useDispatch } from "react-redux";
import Button from "../Button/button";
import "./Counter.css";
import { incrementCounter, decrementCounter, reset } from "../../Store/Slices/counterSliceReducer";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => {
   
    return state.count;
  });
 
  return (
    <div>
      <div className="buttons">
        <Button
          onClick={() => dispatch(decrementCounter())}
          text="-"
          color="rgb(4, 205, 4)"
        />
        <p>{count}</p>
        <Button
          onClick={() => dispatch(incrementCounter())}
          text="+"
          color="rgb(4, 205, 4)"
        />
      </div>

      <Button onClick={() => dispatch(reset())} text="Reset" color="orange" />
    </div>
  );
};

export default Counter;
