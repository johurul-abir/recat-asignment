import "./Blog.scss";
import Hoc from "../../hoc/Hoc";

const Blog = (props) => {
  return (
    <>
      <div className="f-counter">
        <h1> Functional Counter </h1>
        <br />
        <br />
        <br />
        <h1> {props.like} </h1>
        <br />
        <hr />
        <button
          className="btn btn-primary me-1"
          onClick={props.handleIncrement}
        >
          ++
        </button>
        <button className="btn btn-info me-1" onClick={props.handleDecrement}>
          --
        </button>
        <button className="btn btn-danger" onClick={props.handleReset}>
          reset
        </button>
      </div>
    </>
  );
};

export default Hoc(Blog);
