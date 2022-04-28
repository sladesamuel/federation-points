import auth from "../utils/auth";

const login = () => {
  auth.authenticate();
};

const Login = () => (
  <>
    <div>You must login</div>
    <button
      onClick={(e) => {
        e.preventDefault();
        login();
      }}
    >
      Login
    </button>
  </>
);

export default Login;
