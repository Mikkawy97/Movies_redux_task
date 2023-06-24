
import './App.css';
import Stats from './components/Stats';
import MoviesList from './components/MoviesList';
function App() {
  return (
    <div className="container">
          <div className="row all-wrapper m-0">
                <div className="col-md-12 pb-2">
                  <h2>Movies</h2>
                </div>
                <Stats />
                <MoviesList />
          </div>
    </div>
  );
}

export default App;
