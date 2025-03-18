import YouTube, { YouTubeProps } from "react-youtube";

interface IYoutubeVideoProps {
  readonly videoId: string;
}

export default function YoutubeVideo({ videoId }: IYoutubeVideoProps) {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.setVolume(0);
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "631",
    width: "669",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <YouTube
      videoId={videoId}
      opts={opts}
      onReady={onPlayerReady}
    />
  );
}
