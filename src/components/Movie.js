import { useState, useEffect } from "react";
import Slide from "./Slide";
import Loading from "./Loading";

// import required modules, styles for swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

function Movie() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Swiper slidesPerView={4} spaceBetween={30} navigation={true} modules={[Pagination, Navigation]} className="mySwiper">
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <Slide coverImg={movie.medium_cover_image} id={movie.id} title={movie.title} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}

export default Movie;
