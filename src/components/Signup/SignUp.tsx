import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { signupUser } from "../../api/Signup/Signup";
import { toast, ToastContainer } from "react-toastify";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notify, setNotify] = useState(false);

  const handleSignup = async (e:any) => {
    e.preventDefault();

    try {
      const data = await signupUser({ email, password });
      setNotify(true);
      toast(data?.message);
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
        Create an Account
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
          Sign Up
        </Button>
      </form>
    </Box>
  );
};

export default SignUp;
