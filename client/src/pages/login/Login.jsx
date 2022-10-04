import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    console.log("button");
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        credentials
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/Search");
      console.log("button");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="login">
      <div className="lContainer">
        <form
          action="/Search"
          name="myForm"
          onSubmit={handleClick}
        >
          <table cellspacing="2" cellpadding="2" border="1">
            <tr>
              <td align="right">Email</td>
              <td>
                <input
                  type="email"
                  placeholder="email"
                  id="email"
                  onChange={handleChange}
                  className="lInput"
                />
              </td>
            </tr>
            <tr>
              <td align="right">Password</td>
              <td>
                <input
                  type="password"
                  placeholder="password"
                  id="password"
                  pattern="(?=.*[a-z])(?=.*[A-Z]).{8,16}"
                  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or max 16 characters"
                  required
                  onChange={handleChange}
                  className="lInput"
                />
              </td>
            </tr>

            <tr>
              <td align="right"></td>
              <td>
                <input type="submit" value="Submit" />
              </td>
            </tr>
          </table>
        </form>
        
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;
