
import '../App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies ,incrementPage,decrementPage} from "../store/movies/Movies.actions";
import CircularProgress from '@mui/material/CircularProgress';
function MoviesList() {
    const dispatch = useDispatch();
    const movies = useSelector(({ movies }) => movies.data);
    const page = useSelector(({ movies }) => movies.page);
    const isFetching = useSelector(({ movies }) => movies.isFetching);

   
    useEffect(() => {
        dispatch(fetchMovies(page));
      }, [page]);
  return (
  
    <div  className="col-md-12 p-2">
          {isFetching ?   <CircularProgress />:
    <div id="movies_target" className="row m-0">
     
        
         {movies?.map((item =>{
            return (
                <div key={item.id} className="col-md-3">
                <div className="movies_card ">
                    <img src={'https://image.tmdb.org/t/p/w185'+item.backdrop_path+''} alt='movie poster' className="w-100" />
                    <div  className="movies_card_desc">
                        <div>{item.title}</div>
                        <div>{item.vote_average}</div>
                    </div>
                </div>    

            </div>
            )
         }))}
               



    </div>}
    <div className="d-flex  justify-content-center">
          <button id="previous" className="general_btn"
          onClick={()=>{
            if (page !==1){
            dispatch(decrementPage());
            }
            else{
                alert('you are in the first page')
            }
          }}
          >Previous</button>
          <button id="next" className="general_btn" onClick={()=>{
            dispatch(incrementPage());
          }}>Next</button>
    </div>

</div>
        
  );
}

export default MoviesList;