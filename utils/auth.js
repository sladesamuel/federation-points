import netlifyIdentity from "netlify-identity-widget";
import Cookies from "universal-cookie";

// We need to explicitly set the nf-jwt cookie to the user's access token
// to allow it to be passed to the server so we can do auth lookup on the server
// See: https://github.com/netlify/netlify-plugin-nextjs/issues/107#issuecomment-792838047
const cookies = new Cookies();

const setToken = (token) => !!token && cookies.set("nf-jwt", token);
const clearToken = () => cookies.remove("nf-jwt");

const auth = {
  isAuthenticated: false,
  user: null,
  init() {
    window.netlifyIdentity = netlifyIdentity;

    netlifyIdentity.on("logout", () => {
      this.isAuthenticated = false;
      this.user = null;

      clearToken();
    });

    netlifyIdentity.init();
  },
  authenticate(callback) {
    netlifyIdentity.open();
    netlifyIdentity.on("login", (user) => {
      this.isAuthenticated = true;
      this.user = user;

      setToken(user?.token?.access_token);

      if (callback) {
        callback(user);
      }

      netlifyIdentity.close();
    });
  },
  signout(callback) {
    netlifyIdentity.logout();
    netlifyIdentity.on("logout", () => {
      this.isAuthenticated = false;
      this.user = null;

      clearToken();

      if (callback) {
        callback();
      }
    });
  },
};

export default auth;
