import MoviesActionTypes from "./Movies.type";


const initialState = {
  page:1,
  numberofmovies:0,
  topratedmovie:"",
  toprated:0,
  isFetching: false,
  status: "idle",
  data: [],
  details: {},
  related: [],
  errorMessage: null,
  message: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {

    case MoviesActionTypes.FETCH_MOVIES_START:
      return {
        ...state,
        isFetching: true,
      };
    case MoviesActionTypes.FETCH_MOVIES_SUCCESS:
      var movies=action.payload;
      var topMovieRate=0;
      var topindex=0;
        for (let index = 0; index < movies.length; index++) {

          if(movies[index].vote_average >topMovieRate){
            topMovieRate=movies[index].vote_average;
                topindex=index;

         }
        }
      return {
        ...state,
        isFetching: false,
        data: action.payload,
        numberofmovies:action.payload.length,
        topratedmovie:action.payload[topindex].title,
        toprated:action.payload[topindex].vote_average,



      };
    case MoviesActionTypes.FETCH_MOVIES_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
      case MoviesActionTypes.INCREMENT_PAGE:
        var temp =state.page;
        return {
          ...state,
          page:temp+1,
        
        };
        case MoviesActionTypes.DECREMENT_PAGE:
        var temp2 =state.page;
        return {
          ...state,
          page:temp2-1,
        
        };

    default:
      return state;
  }
};

export default movieReducer;
