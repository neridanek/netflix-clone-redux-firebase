import React,{useState,useEffect} from 'react'
import styles from './Banner.module.scss'
import axios from "../axios"
import requests from '../Requests'

const Banner = () => {
    const [movie,setMovie] = useState([])
    const truncate = (string,n) =>{
        return string?.length > n ? string.substr(0,n-1) + "..." : string;
    }
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random()*request.data.results.length-1)
                ]
            )
            return request
        }
        fetchData()
    },[])
    console.log(movie)

    return (
        <header 
            className={styles.banner} 
            style={{
                backgroundSize:"cover",
                backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition:"center center"
        }}>
        <div className={styles.bannerContents}>
            <h1 className={styles.bannerContentsTitle}>
                {movie?.name}
            </h1>
            <div className={styles.bannerContentsButtons}>
                <button>Play</button>
                <button>My List</button>
            </div>
            <h1 className={styles.bannerContentsDescription}>
                {truncate(movie?.overview,120)}
            </h1>
        </div>
        <div className={styles.fadeBottom}></div>
        </header>
            

    )
}

export default Banner
