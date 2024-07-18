import "./Home.scss";
import { Link } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { MdDeleteSweep } from "react-icons/md";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Modal,
  Row,
} from "react-bootstrap";
import Swal from "sweetalert2";
import ReduxTodo from "../../components/redux todo/ReduxTodo";

const Home = () => {
  //create useStarte
  const [formData, setFormData] = useState([]);

  //edit modal useState
  const [editModalShow, seteditModalShow] = useState(false);

  //edit input change useState
  const [editInput, setEditInput] = useState({
    name: "",
    location: "",
    skill: "",
    photo: "",
  });

  //single modal
  const [singleModalShow, setSingleModelShow] = useState(false);

  //single data
  const [singData, setSingData] = useState(false);

  //single modal show handlebar
  const handleSingleShow = async (id) => {
    setSingleModelShow(true);
    const singResponse = await axios.get(`http://localhost:6060/devs/${id}`);
    setSingData((prevState) => ({
      ...prevState,
      ...singResponse.data,
    }));
  };

  //sigle modal hide
  const setSingleModalHide = () => {
    setSingleModelShow(false);
  };

  const getAllData = async () => {
    const formApi = await axios.get("http://localhost:6060/devs");
    setFormData(formApi.data);
  };

  useEffect(() => {
    getAllData();
  }, []);

  //handleDelete
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:6060/devs/${id}`);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        getAllData();
      }
    });
  };

  //handleEditShow Modal
  const handleEditShow = (id) => {
    seteditModalShow(true);
    setEditInput(formData.find((data) => data.id === id));
  };

  //edit input handler
  const handleEditInputChange = (e) => {
    setEditInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //edit form submit
  const handleDevsFormEdit = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:6060/devs/${editInput.id}`, editInput);
    getAllData();

    setEditInput({
      name: "",
      location: "",
      skill: "",
      photo: "",
    });
    seteditModalShow(false);
  };

  return (
    <>
      <div className="container home-con">
        <ul>
          <li>
            <Link to="/facebookauth">facebook</Link>
          </li>
          <li>
            <Link to="/twitterauth">twitter</Link>
          </li>
          <li>
            <Link to="/instagramauth">instagram</Link>
          </li>
        </ul>
      </div>

      <div className="crud">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="card">
                <div className="card-header">
                  <Link to="/adddevs">
                    <button className="btn btn-warning">Add Devs</button>
                  </Link>
                  <h2 className="text-center">Our Curd</h2>
                </div>
                <div className="card-body">
                  <table className="table table-striped">
                    <thead className="text-center">
                      <th>#</th>
                      <th>Photo</th>
                      <th>Name</th>
                      <th>Location</th>
                      <th>Skill</th>
                      <th>Action</th>
                    </thead>
                    <tbody>
                      {formData.map((item, index) => {
                        return (
                          <tr className="align-middle text-center" key={index}>
                            <td>{index + 1}</td>
                            <td>
                              <img src={item.photo} className="user-photo" />
                            </td>
                            <td>{item.name}</td>
                            <td> {item.location} </td>
                            <td> {item.skill} </td>
                            <td>
                              <button
                                className="btn btn-sm btn btn-info m-1"
                                onClick={() => handleEditShow(item.id)}
                              >
                                {" "}
                                <CiEdit />{" "}
                              </button>
                              <button
                                className="btn btn-sm btn btn-danger m-1"
                                onClick={() => handleDelete(item.id)}
                              >
                                {" "}
                                <MdDeleteSweep />{" "}
                              </button>
                              <button
                                className="btn btn-sm btn btn-primary m-1"
                                onClick={() => handleSingleShow(item.id)}
                              >
                                {" "}
                                <AiOutlineEyeInvisible />{" "}
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="edit">
        <Container>
          <Row>
            <Col md={5}>
              <Modal show={editModalShow} onHide={seteditModalShow} centered>
                <Modal.Header>
                  <h3>Edit Devs</h3>
                  <Button
                    className="btn btn-close"
                    variant="danger"
                    onClick={() => seteditModalShow()}
                  ></Button>
                </Modal.Header>
                <Modal.Body>
                  <form onSubmit={handleDevsFormEdit}>
                    <div className="item my-3">
                      <label htmlFor=""> Name </label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        onChange={handleEditInputChange}
                        value={editInput.name}
                      />
                    </div>

                    <div className="item my-3">
                      <label htmlFor="">Location</label>
                      <input
                        type="text"
                        name="location"
                        className="form-control"
                        onChange={handleEditInputChange}
                        value={editInput.location}
                      />
                    </div>

                    <div className="item my-3">
                      <label htmlFor="">Skill</label>
                      <input
                        type="text"
                        name="skill"
                        className="form-control"
                        onChange={handleEditInputChange}
                        value={editInput.skill}
                      />
                    </div>

                    <div className="item my-3">
                      <label htmlFor="">Choose Your Photo</label>
                      <input
                        type="link"
                        name="photo"
                        className="form-control"
                        onChange={handleEditInputChange}
                        value={editInput.photo}
                      />
                    </div>

                    <div className="item">
                      <button className="btn btn-success" type="submit">
                        {" "}
                        Add Devs
                      </button>
                    </div>
                  </form>
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
              </Modal>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="single">
        <Container>
          <Row>
            <Col>
              <Modal
                show={singleModalShow}
                onHide={setSingleModelShow}
                centered
              >
                <Modal.Header>
                  <h3>Single Devs</h3>
                  <Button
                    className="btn btn-close"
                    variant="danger"
                    onClick={setSingleModalHide}
                  ></Button>
                </Modal.Header>
                <Modal.Body>
                  <Card>
                    <CardBody>
                      <div className="singleData">
                        <div className="img">
                          <img
                            src={singData.photo}
                            className="w-100"
                            style={{ height: "400px", objectFit: "cover" }}
                          />
                        </div>
                        <div className="content">
                          <h3>Name: {singData.name}</h3>
                          <h5>Location: {singData.location} </h5>
                          <p>Skill: {singData.skill} </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Modal.Body>
              </Modal>
            </Col>
          </Row>
        </Container>
      </div>
      <ReduxTodo />
    </>
  );
};

export default Home;
