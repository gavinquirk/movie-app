import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from '../../components/Carousel/Carousel';
import logo from './logo-large.png';
import Loader from '../../components/Loader/Loader';
import './Home.css';
import { fetchTopMovies } from '../../actions/movieActions';

const Home = (props) => {
  const dispatch = useDispatch();

  const topMovies = useSelector((state) => state.topMovies);
  const { loading } = topMovies;

  // State
  // const [topMovies, setTopMovies] = useState([]);
  // const [topShows, setTopShows] = useState([]);
  // const [popularShows, setPopularShows] = useState([]);

  // Hooks
  // useEffect(() => {
  // fetchTopMovies();
  // fetchTopShows();
  // fetchPopularShows();
  // }, []);
  useEffect(() => {
    dispatch(fetchTopMovies());
  }, dispatch);

  // const fetchTopShows = async () => {
  //   const response = await fetch('http://localhost:5000/api/shows/top');
  //   const data = await response.json();
  //   setTopShows(data.results);
  // };

  // const fetchPopularShows = async () => {
  //   const response = await fetch('http://localhost:5000/api/shows/popular');
  //   const data = await response.json();
  //   setPopularShows(data.results);
  // };

  return (
    <div className='Home'>
      <section className='logo'>
        <img src={logo} alt={'logo'} />
        <h1>Movie App</h1>
      </section>
      <section id='top-rated-movies'>
        <Carousel category={'Top Rated Movies'} data={topMovies.topMovies} />
      </section>
      {/* <section id='top-rated-shows'>
        <Carousel category={'Top Rated Shows'} data={topShows} />
      </section>
      <section id='popular-shows'>
        <Carousel category={'Popular Shows'} data={popularShows} />
      </section> */}
    </div>
  );
};

export default Home;
