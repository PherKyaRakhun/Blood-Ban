import React from "react";
import Form from "../../components/shared/Forms/Form";
import { useSelector } from "react-redux";
import Spinner from "../../components/shared/Spinner";

const Register = () => {
  const { loading, error } = useSelector((state) => state.auth);

  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="row">
          <div className="col-md-8 form-banner">
            <img src="src/assets/images/banner2 (2).jpeg" alt="loginimage" />
          </div>
          <div className="col-md-4 form-container">
            <Form
              formTittle={"Register Page"}
              submitbutton={"Register"}
              formType={"register"}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
