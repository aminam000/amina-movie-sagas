import React, { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom'; 
import { useState } from 'react';
//mui imports
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

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
            {/* //stretch goal to input movie
            {/* <h2>Add a movie 🎥</h2> */}
                {/* <form noValidate autoComplete='off' 
                onSubmit={getMovies}>
            

                 </form> */}
        </div>
        )
    }
    export default MovieItems;