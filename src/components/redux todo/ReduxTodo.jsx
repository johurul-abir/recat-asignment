import React from "react";
import { Card, CardHeader, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const ReduxTodo = () => {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <>
      <div className="todo">
        <Container className="my-5">
          <Row className="justify-content-center">
            <Col md={6}>
              <Card>
                <CardHeader>
                  <h3>Redux todo In the fist time</h3>
                </CardHeader>
                <Card.Body>
                  <h1 className="text-center">{count} </h1>
                  <hr />
                  <div className="button-group text-center">
                    <button
                      className="btn btn-primary me-1"
                      onClick={() => dispatch({ type: "INC" })}
                    >
                      ++
                    </button>
                    <button
                      className="btn btn-info me-1"
                      onClick={() => dispatch({ type: "DEC" })}
                    >
                      --
                    </button>
                    <button
                      className="btn btn-danger me-1"
                      onClick={() => dispatch({ type: "RESET" })}
                    >
                      reset
                    </button>
                    <button
                      className="btn btn-warning"
                      onClick={() => dispatch({ type: "SET" })}
                    >
                      set
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ReduxTodo;
