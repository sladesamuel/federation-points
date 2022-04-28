import netlifyIdentity from "netlify-identity-widget";

const auth = {
  isAuthenticated: false,
  user: null,
  authenticate(callback) {
    netlifyIdentity.open();
    netlifyIdentity.on("login", (user) => {
      this.isAuthenticated = true;
      this.user = user;

      callback(user);
    });
  },
  signout(callback) {
    netlifyIdentity.logout();
    netlifyIdentity.on("logout", () => {
      this.isAuthenticated = false;
      this.user = null;

      callback();
    });
  },
};

export default auth;
