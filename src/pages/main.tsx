import Header from "../components/header";
import { FaPlayCircle } from "react-icons/fa";
import { MdFullscreen, MdFullscreenExit } from "react-icons/md";
import requestFullscreen from "../utils/requestFullscreen";
// import video_mp4 from "../../public/site/c68f78f1-ca27-4138-92a6-0d978c676fb9.mp4";
import { useEffect, useRef, useState } from "react";
import About from "../content/about";
import Games from "../content/games";
import Footer from "../components/footer";
import Authors from "../content/authors";
import { videoUrls } from "../utils/videoUrls";

export default function Main() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPaused, setIsPaused] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [video, setVideo] = useState<{
    videos: string[];
    currentIndex: number;
    currentURL: string;
  }>({ currentIndex: 0, videos: videoUrls, currentURL: videoUrls[0] });

  const handleEnded = () =>
    setVideo((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.videos.length,
      currentURL: prev.videos[(prev.currentIndex + 1) % prev.videos.length],
    }));

  useEffect(() => {
    const videoElement = videoRef.current;

    const handlePlayPause = () => {
      if (videoElement) {
        setIsPaused(videoElement.paused);
      }
    };
    const handleFullscreen = () => {
      if (videoElement) {
        setIsFullScreen(Boolean(document.fullscreenElement));
      }
    };

    if (videoElement) {
      videoElement.addEventListener("play", handlePlayPause);
      videoElement.addEventListener("pause", handlePlayPause);
      videoElement.addEventListener("fullscreenchange", handleFullscreen);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("play", handlePlayPause);
        videoElement.removeEventListener("pause", handlePlayPause);
        videoElement.removeEventListener("fullscreenchange", handleFullscreen);
      }
    };
  }, []);

  const playPause = () =>
    videoRef.current?.ended
      ? videoRef.current.play()
      : videoRef.current?.paused
      ? videoRef.current.play()
      : videoRef.current?.pause();

  return (
    <main style={{ overflow: "hidden" }}>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "black",
          minHeight: "100vh",
          alignItems: "center",
        }}
        id="home"
      >
        <video
          className="youtube-video"
          autoPlay={true}
          onClick={playPause}
          preload="auto"
          onEnded={() => {
            if (video.currentIndex == 4) {
              window.scrollTo({
                behavior: "smooth",
                top: document.getElementById("about")?.offsetTop,
              });
              return;
            }
            handleEnded();
            videoRef.current?.play();
          }}
          ref={videoRef}
          // muted
        >
          <source src={video.currentURL} />
        </video>
        <span
          style={{
            position: "absolute",
            opacity: isPaused ? "1" : "0",
            transition: ".3s",
          }}
          onClick={playPause}
        >
          <FaPlayCircle
            size={150}
            style={{
              backgroundColor: "#000",
              borderRadius: "50%",
              padding: 7,
            }}
          />
        </span>
        <span
          style={{
            position: "absolute",
            transition: ".3s",
            bottom: 0,
            right: 0,
          }}
          onClick={() => {
            const element = document.getElementById("home")!;
            console.log(document.fullscreenEnabled);
            document.fullscreenElement
              ? document.exitFullscreen().then(() => setIsFullScreen(false))
              : requestFullscreen(element).then(() => setIsFullScreen(true));
          }}
        >
          {isFullScreen ? (
            <MdFullscreen
              size={35}
              style={{
                borderRadius: "50%",
                padding: 7,
              }}
            />
          ) : (
            <MdFullscreenExit
              size={35}
              style={{
                borderRadius: "50%",
                padding: 7,
              }}
            />
          )}
        </span>
      </div>

      <About />
      <Games />
      <Authors />
      <Footer />
    </main>
  );
}
