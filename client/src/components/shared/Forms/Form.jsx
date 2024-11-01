import { useState } from "react";
import InputForms from "./InputType";
import { Link } from "react-router-dom";
import { handleLogin, handleRegister } from "../../../services/authService";

const Form = ({ submitbutton, formTittle, formType }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("donar");
  const [name, setName] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const renderFormFields = () => {
    switch (formType) {
      case "login":
        return (
          <>
            <InputForms
              labelText={"Email"}
              lablefor={"forEMail"}
              inputType={"email"}
              name={"email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputForms
              labelText={"Password"}
              lablefor={"forPassword"}
              inputType={"password"}
              name={"password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </>
        );

      case "register":
        return (
          <>
            <InputForms
              labelText={"Email"}
              lablefor={"forEMail"}
              inputType={"email"}
              name={"email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputForms
              labelText={"Password"}
              lablefor={"forPassword"}
              inputType={"password"}
              name={"password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {(role === "admin" || role === "donar") && (
              <InputForms
                labelText={"Name"}
                lablefor={"forName"}
                inputType={"text"}
                name={"name"}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            )}
            {role === "organisation" && (
              <InputForms
                labelText={"Organisation Name"}
                lablefor={"fororganisationName"}
                inputType={"text"}
                name={"organisationName"}
                value={organisationName}
                onChange={(e) => setOrganisationName(e.target.value)}
              />
            )}
            {role === "hospital" && (
              <InputForms
                labelText={"Hospital Name"}
                lablefor={"forhospitalName"}
                inputType={"text"}
                name={"hospitalName"}
                value={hospitalName}
                onChange={(e) => setHospitalName(e.target.value)}
              />
            )}

            <InputForms
              labelText={"Website"}
              lablefor={"forwebsite"}
              inputType={"text"}
              name={"website"}
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
            <InputForms
              labelText={"Address"}
              lablefor={"foraddress"}
              inputType={"text"}
              name={"address"}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <InputForms
              labelText={"Phone"}
              lablefor={"forphone"}
              inputType={"text"}
              name={"phone"}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          if (formType === "login")
            return handleLogin(e, email, password, role);
          else if (formType === "register")
            return handleRegister(
              e,
              name,
              role,
              email,
              password,
              phone,
              organisationName,
              address,
              hospitalName,
              website
            );
        }}
      >
        <h1 className="text-center">{formTittle}</h1>
        <hr />

        <div className="d-flex mb-3">
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="donarRadio"
              value={"donar"}
              onChange={(e) => setRole(e.target.value)}
              defaultChecked
            />
            <label htmlFor="donarRadio" className="form-check-label">
              Donar
            </label>
          </div>

          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="adminRadio"
              value={"admin"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="adminRadio" className="form-check-label">
              Admin
            </label>
          </div>

          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="hospitalRadio"
              value={"hospital"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="hospitalRadio" className="form-check-label">
              Hospital
            </label>
          </div>

          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="organisationRadio"
              value={"organisation"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="organisationRadio" className="form-check-label">
              Organisation
            </label>
          </div>
        </div>

        {renderFormFields()}
        <div className="d-flex flex-row justify-content-between">
          {formType === "login" ? (
            <p>
              Not register Yet ? Register
              <Link to="/register"> Here!</Link>
            </p>
          ) : (
            <p>
              Already user please
              <Link to="/login"> Login!</Link>
            </p>
          )}
          <button className="btn btn-primary" type="submit">
            {submitbutton}
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
