import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieItems from '../MovieItems/MovieItems.js';
import MovieInfo from '../MovieInfo/MovieInfo';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
        <MovieItems />
         <MovieList />
        </Route>
        
        <Route path='/movieInfo/:id' exact>

        <MovieInfo />

      </Route>  
      
      </Router>
    </div>
  );
}


export default App;
