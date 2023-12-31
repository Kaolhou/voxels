import { useEffect, useRef, useState } from "react";
import { FaPlayCircle } from "react-icons/fa";
import requestFullscreen from "../utils/requestFullscreen";
import { videoUrls } from "../utils/videoUrls";
import { MdFullscreen, MdFullscreenExit } from "react-icons/md";

export default function VideoSplit() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPaused, setIsPaused] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [video, setVideo] = useState<{
    videos: string[];
    currentIndex: number;
    currentURL: string;
    hasToPlay: boolean;
    endedOnce: boolean;
  }>({
    currentIndex: 0,
    videos: videoUrls,
    currentURL: videoUrls[0],
    hasToPlay: true,
    endedOnce: false,
  });

  const handleEnded = (hasToPlay = true, endedOnce?: boolean) => {
    setVideo((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.videos.length,
      currentURL: prev.videos[(prev.currentIndex + 1) % prev.videos.length],
      hasToPlay,
      endedOnce: endedOnce ?? prev.endedOnce,
    }));
  };

  useEffect(() => {
    const videoElement = videoRef.current;

    videoElement?.play().catch(() => console.info("couldn't autoplay video"));

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
      // videoElement.addEventListener("loadedmetadata", playOnMetadata);
      videoElement.addEventListener("play", handlePlayPause);
      videoElement.addEventListener("pause", handlePlayPause);
      videoElement.addEventListener("fullscreenchange", handleFullscreen);
    }

    return () => {
      if (videoElement) {
        // videoElement.removeEventListener("loadedmetadata", playOnMetadata);
        videoElement.removeEventListener("play", handlePlayPause);
        videoElement.removeEventListener("pause", handlePlayPause);
        videoElement.removeEventListener("fullscreenchange", handleFullscreen);
      }
    };
  }, []);
  const playPause = () => {
    videoRef.current?.ended
      ? videoRef.current.play()
      : videoRef.current?.paused
      ? videoRef.current.play()
      : videoRef.current?.pause();
  };
  useEffect(() => {
    const videoElement = videoRef.current;
    const handleCanPlayThrough = () => {
      const nextIndex = (video.currentIndex + 1) % video.videos.length;
      const nextVideoURL = video.videos[nextIndex];
      const nextVideoElement = document.createElement("video");
      nextVideoElement.src = nextVideoURL;
      nextVideoElement.preload = "auto";
    };
    if (videoElement) {
      videoElement.addEventListener("canplaythrough", handleCanPlayThrough);
    }
    if (video.currentIndex != 0 || video.endedOnce) videoElement?.load();
    if (video.hasToPlay) videoElement?.play();
    else videoElement?.pause();

    return () => {
      if (videoElement) {
        videoElement.removeEventListener(
          "canplaythrough",
          handleCanPlayThrough
        );
      }
    };
  }, [video]);
  return (
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
        onClick={playPause}
        preload="auto"
        autoPlay={true}
        onEnded={() => {
          if (video.currentIndex == 4) {
            window.scrollTo({
              behavior: "smooth",
              top: document.getElementById("about")?.offsetTop,
            });
            handleEnded(false, true);
            return;
          }
          handleEnded();
          videoRef.current?.load();
          videoRef.current?.play();
        }}
        ref={videoRef}
        // muted
      >
        <source src={video.currentURL} />
      </video>
      <video id="nextVideo" style={{ width: 0, height: 0 }}></video>
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
          document.fullscreenElement
            ? document.exitFullscreen().then(() => setIsFullScreen(false))
            : requestFullscreen(element).then(() => setIsFullScreen(true));
        }}
      >
        {isFullScreen ? (
          <MdFullscreen
            size={"2rem"}
            style={{
              borderRadius: "50%",
              padding: 7,
            }}
          />
        ) : (
          <MdFullscreenExit
            size={"2rem"}
            style={{
              borderRadius: "50%",
              padding: 7,
            }}
          />
        )}
      </span>
    </div>
  );
}
