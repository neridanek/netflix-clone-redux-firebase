import React from 'react'
import Nav from './components/Nav'
import Banner from './components/Banner'
import Row from './components/Row'
import requests from './Requests'
import styles from './HomeScreen.module.scss'


const HomeScreen = () => {
    return (
        <div className={styles.homeScreen}>
            <Nav />
            <Banner />
        
        <Row
        isLargeRow
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        />
        <Row title="Trending now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTrending} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        
        </div>
    )
}

export default HomeScreen
