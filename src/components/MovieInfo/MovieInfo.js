import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {useEffect} from 'react';

import { useHistory } from 'react-router-dom';


function MovieDetails() {
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    const fetchInfo = useSelector(store => store.movieInfo);
    
    useEffect(()=> {
        dispatch({
            type: 'FETCH_INFO',
            payload: params.id
        })
       
    },[])

    const homePage = () => {
        history.push('/')
    }

    return (
        <div>
            <h2>Movie {params.id}</h2>

          
            <div key={fetchInfo.id}>
                    <h2>{fetchInfo.title}</h2>
                    <img src={fetchInfo.poster}/>
                    <p>{fetchInfo.description}</p>
                    <button onClick= {homePage}>Home 🏡 </button>
                </div>
               
        
        </div>
    )
}

export default MovieDetails;


//use mui to make prettier
