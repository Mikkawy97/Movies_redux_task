import MoviesActionTypes from "./Movies.type";




export const fetchMoviesStart = () => ({
  type: MoviesActionTypes.FETCH_MOVIES_START,
});

export const incrementPage = () => ({
  type: MoviesActionTypes.INCREMENT_PAGE,
});
export const decrementPage = () => ({
  type: MoviesActionTypes.DECREMENT_PAGE,
});
export const selected_movie = (movie) => ({
  type: MoviesActionTypes.SELECTED_MOVIE,
  payload:movie
});
export const unselectMovie = () => ({
  type: MoviesActionTypes.UNSELECT_MOVIE,

});

export const fetchMoviesSuccess = (movies) => ({
  type: MoviesActionTypes.FETCH_MOVIES_SUCCESS,
  payload: movies,
});

export const fetchMoviesFailure = (errorMessage) => ({
  type: MoviesActionTypes.FETCH_MOVIES_FAILURE,
  payload: errorMessage,
});


export const fetchMovies = (page) => async (dispatch) => {
  dispatch(fetchMoviesStart());

  try {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGVkZDYxOGFmMmIzOGI5NDYwZTE0NmIzNDk4MzE2ZSIsInN1YiI6IjY0NzczYTJlMjU1ZGJhMDBhOWEyMTBlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UoiUoTnlprq4OuHe5dvV6XDRgkr_cZPwv5Pgt2rygrU'
      }
    };
            
 await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page='+page+'&sort_by=popularity.desc',options).then(res =>
  res.json()).then(d => {
      
      dispatch(fetchMoviesSuccess(d.results));
    
  })
    
  } catch (error) {
    dispatch(fetchMoviesFailure(error.message));
  }
};
// export const incrementPage = () => async (dispatch) => {
//   dispatch(fetchMoviesStart());

//   try {
//     const options = {
//       method: 'GET',
//       headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGVkZDYxOGFmMmIzOGI5NDYwZTE0NmIzNDk4MzE2ZSIsInN1YiI6IjY0NzczYTJlMjU1ZGJhMDBhOWEyMTBlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UoiUoTnlprq4OuHe5dvV6XDRgkr_cZPwv5Pgt2rygrU'
//       }
//     };
            
//  await fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",options).then(res =>
//   res.json()).then(d => {
      
//       dispatch(fetchMoviesSuccess(d.results));
    
//   })
    
//   } catch (error) {
//     dispatch(fetchMoviesFailure(error.message));
//   }
// };




