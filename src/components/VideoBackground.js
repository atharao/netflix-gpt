import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);

  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  if (!trailerVideo) return;

  return (
      <iframe
        className="w-full h-full bg-gradient-to-r from-black"
        src={
          "https://www.youtube.com/embed/qH6SqkWS9WA?si=" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
  );
};

export default VideoBackground;
