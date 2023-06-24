
import '../App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies ,incrementPage,decrementPage,selected_movie,unselectMovie} from "../store/movies/Movies.actions";
import CircularProgress from '@mui/material/CircularProgress';
import { Modal,Button} from 'react-bootstrap';
function MoviesList() {
    const dispatch = useDispatch();
    const movies = useSelector(({ movies }) => movies.data);
    const page = useSelector(({ movies }) => movies.page);
    const isFetching = useSelector(({ movies }) => movies.isFetching);
    const isOpen = useSelector(({ movies }) => movies.modal_Is_Open);
    const movieSelected = useSelector(({ movies }) => movies.selected_movie);
   
    useEffect(() => {
        dispatch(fetchMovies(page));
      }, [page]);
      console.log(movieSelected);
  return (
  <div >
    <div  className="col-md-12 p-2">
          {isFetching ?   <CircularProgress />:
            <div id="movies_target" className="row m-0">
     
        
         {movies?.map((item =>{
            return (
                <div key={item.id} className="col-md-3" 
                onClick={()=>{
                       dispatch(selected_movie(item)); 
                }}>
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
<Modal show={isOpen} size='lg' contentClassName="bg-transparent">
        <Modal.Header className='border-none'  closeButton onClick={()=>{
            dispatch(unselectMovie());
        }} >
         
        </Modal.Header>
        <Modal.Body className="bg-light p-0">
        <div className='container-fluid p-0'>
            <div className='row m-0 '>
                <div className='col-md-3 p-0'>
                    <div className='img_container'>
                    <img src={'https://image.tmdb.org/t/p/w185'+movieSelected.backdrop_path+''} alt='movie' />
                    </div>
                </div>
                <div className='col-md-9'>
                    <div className=''>{movieSelected.title}</div>
                    <div className=''>IMDB Rating : {movieSelected.vote_average}/10 ({movieSelected.vote_count} Votes)</div>
                    <div className=''>{movieSelected.overview}</div>
                    
                </div>
            </div>
        </div>
        </Modal.Body>
     
      </Modal>

</div>
        
  );
}

export default MoviesList;