import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useUser } from "../../context/userContext";
import "./Login.css";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { setUser } = useUser();
  const TextFieldStyle = {
    marginBottom: "1rem",
    backgroundColor: "white",
  };

  const handleLogin = async () => {
    console.log("Logging in with", formData);
    fetch("http://backend:3000/user/login", {
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  };

  return (
    <div className="login-page">
      <div className="login-form">
        <TextField
          placeholder="Username"
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
          sx={TextFieldStyle}
        />
        <TextField
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          sx={TextFieldStyle}
        />
        <Button variant="contained" onClick={handleLogin} color="success">
          Log in
        </Button>

        <Typography>Don't have an account?</Typography>
        <Button>
          <Typography>Create Account</Typography>
        </Button>
      </div>
    </div>
  );
}

export default Login;
