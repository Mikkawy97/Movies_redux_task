import '../App.css';
import {  useSelector } from "react-redux";
function Stats() {
  const page = useSelector(({ movies }) => movies.page);
  const topRatedName = useSelector(({ movies }) => movies.topratedmovie);
  const numberOfMovies=useSelector(({ movies }) => movies.numberofmovies);
  const topRating=useSelector(({ movies }) => movies.toprated);

  return (
    <div  className="col-md-12 pb-2">
            <div id="stats_target" className="card">
     

                <div id="stats_wrapper">
                <h3 className="pb-1">Stats</h3>
              
                <div className="card_desc pb-1 ">Current Page : {page} </div>
                <div className="card_desc pb-1">Number Of Movies : {numberOfMovies} </div>
                <div className="card_desc pb-1">Top Rated Movie Name : {topRatedName}</div>
                <div className="card_desc pb-1">Rating : {topRating}</div>
                </div>
         


    </div>
    
</div>
  );
}

export default Stats;
