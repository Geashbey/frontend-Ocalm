import { connect } from 'react-redux';

import { addFavorite, sendFavorites, importFavorites, deleteFavorite } from 'src/actions/users';

import Favorites from 'src/components/Favorites';

const mapStateToProps = (state) => ({
  videos: state.videos.videos,
  favorites: state.users.favorites,
});

const mapDispatchToProps = (dispatch) => ({
  addFavorite: (addFav) => {
    dispatch(addFavorite(addFav));
  },
  sendFavorites: (addFav) => {
    dispatch(sendFavorites(addFav));
  },
  importFavorites: () => {
    dispatch(importFavorites());
  },
  deleteFavorite: () => {
    dispatch(deleteFavorite());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
