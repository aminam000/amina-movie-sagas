import React, { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom'; 
import { useState } from 'react';


function MovieItems() {
    const history = useHistory();
    const dispatch = useDispatch();
    
    console.log('in movie details');
    
    const [title, setTitle] = useState('');
    const [poster, setPoster] = useState('');
    const [description, setDescription] = useState('');
    

    //i know we are advised to use fetch but theres too many fetches in play rn
    const getMovies = (evt) => {
        evt.preventDefault();
        dispatch({
            type: 'ADD_MOVIE',
            payload: {
                title: title,
                poster: poster,
                description: description
            }
        })
       
    }
   
    return (
        <div>
            <h2>Add a movie 🎞  </h2>
       
              <button onClick={getMovies}> </button>
        </div>
        )
    }
    export default MovieItems;