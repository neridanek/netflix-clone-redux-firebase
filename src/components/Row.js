import React,{useState,useEffect} from 'react'
import styles from './Row.module.scss'
import axios from '../axios'
import PopUp from './PopUp'

const Row = ({title,fetchUrl,isLargeRow=false}) => {
    const [movies,setMovies] = useState([])
    const [filmId,setFilmId] = useState(null)
    const [isActive,setIsActive] = useState(false)
    
    const getSelectedMovie = () => movies.find(movie => movie.id === filmId);
    const selectedMovie = getSelectedMovie()
    
    const base_url = "https://image.tmdb.org/t/p/original";
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    },[fetchUrl])
    console.log(movies)
    
    
    return (
        <div className={styles.row}>
            <h2>{title}</h2>
            <div  className={styles.rowPoster}>
                
            {movies.map(movie=>(
                ((isLargeRow && movie.poster_path) ||
                (!isLargeRow && movie.backdrop_path)) &&(
                    <div onClick={isActive ? ()=>setIsActive(false) : ()=>setIsActive(true) }>
                    <img onClick={() => setFilmId(movie.id)} className={isLargeRow ? styles.rowImgLarge : styles.rowImg } key={movie.id} src={`${base_url}${
                        isLargeRow ? movie.poster_path:movie.backdrop_path
                    }`} 
                    alt={movie.name}
                    />
                    </div>
                   
                )
                
            ))}
            </div>
            { isActive ? <PopUp key={selectedMovie.id} name={selectedMovie.name} description={selectedMovie.overview} image={selectedMovie.backdrop_path} active={isActive} /> 
                : 
                null
                }
            
        </div>

        
           
        
    
    )
}
export default Row;
