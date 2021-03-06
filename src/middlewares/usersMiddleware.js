/* eslint-disable prefer-destructuring */
/* eslint-disable prefer-arrow-callback */
import axios from "axios";

import {
  FETCH_USERS,
  saveUsers,
  VERIF_LOGIN,
  saveToken,
  VERIF_SESSION,
  isLogged,
  SEND_SUBSCRIBE,
  USER_PROFILE,
  SEND_FAVORITES,
  IMPORT_FAVORITES,
  saveFavorites,
  importFavorites,
  DELETE_FAVORITE,
  setUser,
  UPDATE_USER_PROFILE,
} from "src/actions/users";
import { setErrors } from "src/actions/errors";

const apiUrl = "http://ec2-34-201-250-153.compute-1.amazonaws.com";

const usersMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_USERS: {
      axios
        .get(`${apiUrl}/o-calm/wp-json/wp/v2/users?per_page=100`)
        .then((response) => {
          store.dispatch(saveUsers(response.data));
        })
        .then((error) => {
          console.warn(error);
          store.dispatch(setErrors(error));
        });

      next(action);
      break;
    }

    case VERIF_LOGIN: {
      const { loginValue } = store.getState().users;
      const username = loginValue.username;
      const password = loginValue.password;
      axios
        .post(
          `${apiUrl}/o-calm/wp-json/jwt-auth/v1/token?username=${username}&password=${password}`
        )
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          store.dispatch(saveToken(response.data));
        })
        .then((error) => {
          console.warn(error);
          store.dispatch(setErrors(error));
        });
      next(action);
      break;
    }

    case VERIF_SESSION: {
      const token = localStorage.getItem("token");
      const verifySession = new Promise((resolve, reject) => {
        if (localStorage.token) {
          axios({
            method: "post",
            url: `${apiUrl}/o-calm/wp-json/jwt-auth/v1/token/validate`,
            headers: { Authorization: `Bearer ${token}` },
          })
            .then(resolve)
            .catch(reject);
        } else {
          reject();
        }
      });
      verifySession.then(isLogged(true)).catch(isLogged(false));

      next(action);
      break;
    }

    case SEND_SUBSCRIBE: {
      const { subArray } = store.getState().users;
      axios
        .post(`${apiUrl}/o-calm/wp-json/wp/v2/users/register`, subArray)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.warn(error);
          store.dispatch(setErrors(error));
        });
      next(action);
      break;
    }

    case USER_PROFILE: {
      const token = localStorage.getItem("token");
      const verifySession = new Promise((resolve, reject) => {
        if (localStorage.token) {
          axios({
            method: "post",
            url: `${apiUrl}/o-calm/wp-json/wp/v2/users/me`,
            headers: { Authorization: `Bearer ${token}` },
          })
            .then(resolve)
            .catch(reject);
        } else {
          reject();
        }
      });
      verifySession
        .then((response) => {
          store.dispatch(setUser(response.data));
        })
        .catch((error) => {
          console.warn(error);
          store.dispatch(setErrors(error));
        });

      next(action);
      break;
    }

    case SEND_FAVORITES: {
      const token = localStorage.getItem("token");
      const post_id = store.getState().users.addFav;
      const sendFav = new Promise((resolve, reject) => {
        axios({
          method: "post",
          url: `${apiUrl}/o-calm/wp-json/ocalm-settings/v1/video/favorite`,
          headers: { Authorization: `Bearer ${token}` },
          data: { post_id },
        })
          .then(resolve)
          .catch(reject);
      });
      sendFav
        .then(() => {
          importFavorites();
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;
    }

    case IMPORT_FAVORITES: {
      const token = localStorage.getItem("token");
      const saveFav = new Promise((resolve, reject) => {
        axios({
          method: "get",
          url: `${apiUrl}/o-calm/wp-json/ocalm-settings/v1/video/favorite?per_page=100`,
          headers: { Authorization: `Bearer ${token}` },
        })
          .then(resolve)
          .catch(reject);
      });
      saveFav
        .then((response) => {
          store.dispatch(saveFavorites(response.data));
        })
        .catch((error) => {
          console.warn(error);
          store.dispatch(setErrors(error));
        });

      next(action);
      break;
    }

    case DELETE_FAVORITE: {
      const token = localStorage.getItem("token");
      const post_id = store.getState().users.addFav;
      const sendFav = new Promise((resolve, reject) => {
        axios({
          method: "delete",
          url: `${apiUrl}/o-calm/wp-json/ocalm-settings/v1/video/favorite`,
          headers: { Authorization: `Bearer ${token}` },
          data: { post_id },
        })
          .then(resolve)
          .catch(reject);
      });
      sendFav
        .then(() => {
          importFavorites();
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;
    }

    case UPDATE_USER_PROFILE: {
      const token = localStorage.getItem("token");
      const { updateValue } = store.getState().users;
      const verifySession = new Promise((resolve, reject) => {
        axios({
          method: "post",
          url: `${apiUrl}/o-calm/wp-json/wp/v2/users/me`,
          headers: { Authorization: `Bearer ${token}` },
          data: { updateValue },
        })
          .then(resolve)
          .catch(reject);
      });
      verifySession
        .then((response) => {
          console.log(response);
          // store.dispatch(setUser(response.data));
        })
        .catch((error) => {
          console.warn(error);
          store.dispatch(setErrors(error));
        });

      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default usersMiddleware;
