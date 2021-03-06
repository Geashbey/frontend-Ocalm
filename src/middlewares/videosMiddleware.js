/* eslint-disable prefer-destructuring */
import axios from "axios";

import {
  FETCH_VIDEOS,
  saveVideos,
  FETCH_CATEGORIES,
  saveCategories,
  FETCH_AUTHORS,
  saveAuthors,
  FETCH_DURATIONS,
  saveDurations,
  SEND_RESEARCH,
  resultResearch,
} from "src/actions/videos";
import { getErrors } from "src/actions/errors";
const apiUrl = "http://ec2-34-201-250-153.compute-1.amazonaws.com";

const videosMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_VIDEOS: {
      axios
        .get(`${apiUrl}/o-calm/wp-json/wp/v2/video?per_page=100`)
        .then((response) => {
          store.dispatch(saveVideos(response.data));
        })
        .then((error) => {
          console.warn(error);
          store.dispatch(getErrors(error));
        });

      next(action);
      break;
    }

    case FETCH_CATEGORIES: {
      axios
        .get(`${apiUrl}/o-calm/wp-json/wp/v2/video_categorie`)
        .then((response) => {
          store.dispatch(saveCategories(response.data));
        })
        .then((error) => {
          console.warn(error);
          store.dispatch(getErrors(error));
        });

      next(action);
      break;
    }

    case FETCH_AUTHORS: {
      axios
        .get(`${apiUrl}/o-calm/wp-json/wp/v2/video_auteur`)
        .then((response) => {
          store.dispatch(saveAuthors(response.data));
        })
        .then((error) => {
          console.warn(error);
          store.dispatch(getErrors(error));
        });

      next(action);
      break;
    }

    case FETCH_DURATIONS: {
      axios
        .get(`${apiUrl}/o-calm/wp-json/wp/v2/video_duree?orderby=id`)
        .then((response) => {
          store.dispatch(saveDurations(response.data));
        })
        .then((error) => {
          console.warn(error);
          store.dispatch(getErrors(error));
        });

      next(action);
      break;
    }

    case SEND_RESEARCH: {
      const { research } = store.getState().videos;
      const category = research.category;
      const author = research.author;
      const duration = research.duration;
      axios
        .get(
          `${apiUrl}/o-calm/wp-json/wp/v2/video?video_categorie=${category}&video_auteur=${author}&video_duree=${duration}`
        )
        .then((response) => {
          store.dispatch(resultResearch(response.data));
        })
        .then((error) => {
          console.warn(error);
          store.dispatch(getErrors(error));
        });

      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default videosMiddleware;
