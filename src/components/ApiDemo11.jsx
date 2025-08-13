import axios from "axios";
import React, { useEffect, useState } from "react";
import { Loader } from "../common/Loader";
import { useFetchApi } from "../hooks/ApiCallHook";
import { toast } from "react-toastify";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ApiDemo11 = () => {
  const { data, isLoading, getApiCall,setdata } = useFetchApi(
    "https://node5.onrender.com/user/user"
  );
  const [show, setshow] = useState(false);
  const [singleUser, setsingleUser] = useState({})

  const deleteHandler = async (id) => {
    //const res = await axios.delete("https://node5.onrender.com/user/user/"+id)
    const res = await axios.delete(
      `https://node5.onrender.com/user/user/${id}`
    );
    console.log(res);
    if (res.status == 204) {
      toast.success("user deleted successfully !!");
      //datbase new data..
      //get api..
      getApiCall();
    }
  };

  const detailHandeler=async(id)=>{
    //api call
    const res = await axios.get(`https://node5.onrender.com/user/user/${id}`)
    console.log(res.data)
    setsingleUser(res.data.data)
    setshow(true)
  }
  const handleClose = ()=>setshow(false)
  const searchHandler = async(value)=>{
    const res = await axios.get("https://node5.onrender.com/user/filter?name="+value)
    console.log(res.data.data)
    setdata(res.data.data)

  }

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <label>SEARCH</label>
        <input type="search" onChange={(event)=>{searchHandler(event.target.value)}}></input>
      </div>
      {isLoading && <Loader />}
      <h1>API DEMO 11</h1>
      <h1>USERS</h1>
      <table className="table table-dark">
        <thead>
          <tr>
            <td>ID</td>
            <td>NAME</td>
            <td>EMAIL</td>
            <td>AGE</td>
            <td>ACTION</td>
          </tr>
        </thead>
        <tbody>
          {data.data?.map((user) => {
            return (
              <tr>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>
                  <button
                    onClick={() => {
                      deleteHandler(user._id);
                    }}
                    className="btn btn-danger"
                  >
                    DELETE
                  </button>
                  <button
                    onClick={() => {
                      detailHandeler(user._id);
                    }}
                    className="btn btn-primary"
                  >
                    DETAIL
                  </button>
                  <Link to={`/updateuser/${user._id}`} className="btn btn-warning">
                  update
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>USER DETAO:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h1>USER NAME ={singleUser.name}</h1>
            <h1>USER AGE ={singleUser.age}</h1>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
