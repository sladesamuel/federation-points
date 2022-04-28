import auth from "../utils/auth";

const Login = () => (
  <>
    <div>You must login</div>
    <button
      onClick={(e) => {
        e.preventDefault();

        auth.authenticate();
      }}
    >
      Login
    </button>
  </>
);

export default Login;
