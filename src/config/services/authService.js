const axios = require("axios");
const admin = require("../../config/firbase");

exports.createUser = async (email, password) => {
  return await admin.auth().createUser({
    email,
    password,
    emailVerified: false,
    disabled: false,
  });
};

// login
exports.loginUser = async (email, password) => {
  try {
    const firebaseLoginURL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.FIREBASE_API_KEY}`;
    const response = await axios.post(firebaseLoginURL, {
      email,
      password,
      returnSecureToken: true,
    });
    return {
      uid: response.data.localId,
      email: response.data.email,
      idToken: response.data.idToken,
      refreshToken: response.data.refreshToken,
      expiresIn: response.data.expiresIn,
    };
  } catch (error) {
    throw new Error(error.response?.data?.error?.message || "Login failed");
  }
};
// getusername
exports.getUserByEmail = async (email) => {
  try {
    const user = await admin.auth().getUserByEmail(email);
    return user;
  } catch (err) {
    throw new Error(
      error.response?.data?.error?.message || "Getting user name failed"
    );
  }
};
