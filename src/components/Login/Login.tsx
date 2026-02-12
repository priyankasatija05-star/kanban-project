import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { loginUser } from "../../api/Login/Login";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserEmail } from "../../store/slices/LoginSlice";
import { AppDispatch } from "../../store";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notify, setNotify] = useState(false);
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const handleSignup = async (e:any) => {
    e.preventDefault();

    try {
      const data = await loginUser({ email, password });
      dispatch(setUserEmail(email));
      toast(data?.message)
      navigate("/dashboard")
   
    } catch (err) {
      // const errorMessage =
      //   err?.response?.data?.message || err?.message || "Something went wrong";
      // setNotify(true);
      // toast(errorMessage);
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 6,
        p: 4,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      {notify && <ToastContainer />}

      <Typography variant="h5" mb={3} fontWeight={600}>
        Login
      </Typography>

      <form onSubmit={handleSignup}>
        <TextField
          label="Email Address"
          type="email"
          variant="outlined"
          fullWidth
          required
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          required
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ mt: 2, py: 1.2 }}
        >
          Login
        </Button>
        <Box sx={{ mt: 2 }}>
          <Link to="/signup">Don't have Account? Sign Up</Link>
        </Box>

        {/* </Button> */}
      </form>
    </Box>
  );
};

export default Login;
