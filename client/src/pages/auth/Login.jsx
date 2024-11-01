import InputForms from "../../components/shared/Forms/InputType.jsx";
import Form from "../../components/shared/Forms/Form";
import { useSelector } from "react-redux";
import Spinner from "../../components/shared/Spinner.jsx";

const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);

  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="row">
          <div className="col-md-8 form-banner">
            <img src="src/assets/images/banner1.jpeg" alt="loginimage" />
          </div>
          <div className="col-md-4 form-container">
            <Form
              formTittle={"Login Page"}
              submitbutton={"Submit"}
              formType={"login"}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
