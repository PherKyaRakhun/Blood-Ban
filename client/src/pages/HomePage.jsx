import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Spinner from "../components/shared/Spinner";
import Layout from "../components/shared/Layout/Layout.jsx";
import Modal from "../components/shared/model/Modal.jsx";
import API from "../services/API.js";
import moment from "moment";

const Home = () => {
  const { loading, error } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);

  //Get function
  const getBloodRecords = async () => {
    try {
      const { data } = await API.get("/inventory/get-inventory");
      if (data?.success) {
        setData(data?.inventory);
        // console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBloodRecords();
  }, []);

  return (
    <Layout>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h4
            className="ms-4"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            style={{ cursor: "pointer" }}
          >
            <i className="fa-solid fa-plus text-success py-4"></i>
            Add Inventory
          </h4>
          <table className="table ">
            <thead>
              <tr>
                <th scope="col">Blood Group</th>
                <th scope="col">Inventory Type</th>
                <th scope="col">Quantity</th>
                <th scope="col">Donar Email</th>
                <th scope="col">TIme & Date</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((record) => (
                <tr key={record._id}>
                  <td>{record.bloodGroup}</td>
                  <td>{record.inventoryType}</td>
                  <td>{record.quantity} (ML)</td>
                  <td>{record.email}</td>
                  <td>
                    {moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Modal />
        </>
      )}
    </Layout>
  );
};

export default Home;
