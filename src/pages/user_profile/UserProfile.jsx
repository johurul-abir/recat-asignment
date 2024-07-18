import React, { Component } from "react";
import "./UserProfile.scss";
import axios from "axios";
import { Card, Col, Container, Row } from "react-bootstrap";

export class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {
        todo: "",
        type: "",
      },
      tododata: [],
      upadatebtn: false,
      submitbtn: true,
    };
  }

  componentDidMount = () => {
    this.getTodos();
  };

  render() {
    //delete todo
    this.handleDeleteTodo = async (id) => {
      await axios.delete(`http://localhost:6060/todos/${id}`);
      this.getTodos();
    };

    //handleEdit todos
    this.handleEdit = async (id) => {
      this.setState((prevState) => ({
        ...prevState,
        upadatebtn: true,
      }));
      const editData = this.state.tododata.find((data) => data.id === id);

      this.setState((prevState) => ({
        ...prevState,
        input: {
          ...this.state.input,
          todo: editData.todo,
          type: editData.type,
        },
      }));
    };

    //upadate todo
    this.handleTodoUpdate = async (id) => {
      const input = this.state.input;
      await axios.patch(`http://localhost:6060/todos/${id}`, input);
      this.setState((prevState) => ({
        ...prevState,
        input: {
          ...this.state.input,
          todo: "",
          type: "",
        },
      }));
      this.getTodos();
    };

    //handle go back button controll
    this.handleGoBack = () => {
      this.setState((prevState) => ({
        ...prevState,
        upadatebtn: false,
      }));
    };
    //handle input change
    this.handleInputChage = (e) => {
      this.setState((prevState) => ({
        ...prevState,
        input: {
          ...this.state.input,
          [e.target.name]: e.target.value,
        },
      }));
    };

    //todo handle submit
    this.handleTodoSubmit = async (e) => {
      const input = this.state.input;
      await axios.post("http://localhost:6060/todos", input);

      this.setState((prevState) => ({
        ...prevState,
        input: {
          ...this.state.input,
          todo: "",
          type: "",
        },
      }));
      this.getTodos();
    };

    //get all todos api call
    this.getTodos = async () => {
      const respons = await axios.get("http://localhost:6060/todos");
      this.setState((prevState) => ({
        ...prevState,
        tododata: respons.data,
      }));
    };

    return (
      <>
        <Container className="mt-5">
          <Row className="justify-content-center">
            <Col md={9} sm={12} lg={6}>
              <Card>
                <Card.Header>
                  <h1>Todo app by using class-copnonent</h1>
                </Card.Header>
                <Card.Body>
                  <div className="from-data">
                    <div className="me-3">
                      <input
                        type="text"
                        name="todo"
                        className="form-control"
                        onChange={this.handleInputChage}
                        value={this.state.input.todo}
                      />
                    </div>
                    <div className="me-3">
                      <select
                        name="type"
                        className="form-control"
                        onChange={this.handleInputChage}
                        value={this.state.input.type}
                      >
                        <option value=""> --select-- </option>
                        <option value="copmleted"> Completed </option>
                        <option value="panding"> Panding </option>
                        <option value="deleted"> Deleted </option>
                        <option value="skip"> Skip </option>
                      </select>
                    </div>
                    <div className="mb-3">
                      {this.state.upadatebtn ? (
                        <button
                          className="btn btn-info"
                          onClick={() => this.handleTodoUpdate(item.id)}
                        >
                          {" "}
                          Update{" "}
                        </button>
                      ) : (
                        <button
                          className="btn btn-primary"
                          onClick={this.handleTodoSubmit}
                        >
                          {" "}
                          Submit{" "}
                        </button>
                      )}

                      <button
                        className="btn btn-secondary ms-1"
                        onClick={this.handleGoBack}
                      >
                        go back
                      </button>
                    </div>
                  </div>
                  <div className="search-btn-type">
                    <button className="btn btn-sm btn btn-success me-1">
                      Complete
                    </button>
                    <button className="btn btn-sm btn btn-info me-1">
                      Pending
                    </button>
                    <button className="btn btn-sm btn btn-danger me-1">
                      Deleted
                    </button>
                    <button className="btn btn-sm btn btn-warning me-1">
                      Skip
                    </button>
                  </div>

                  <hr />
                  <br />
                  {this.state.tododata.map((item, index) => {
                    return (
                      <div className="output m-2" key={index}>
                        <h6> {item.todo} </h6>
                        <div className="buton">
                          <button
                            className="btn btn-sm btn btn-danger me-1"
                            onClick={() => this.handleDeleteTodo(item.id)}
                          >
                            delete
                          </button>
                          <button
                            className="btn btn-sm btn btn-info me-1"
                            onClick={() => this.handleEdit(item.id)}
                          >
                            edit
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <div className="c-counter"></div>
      </>
    );
  }
}

export default UserProfile;
