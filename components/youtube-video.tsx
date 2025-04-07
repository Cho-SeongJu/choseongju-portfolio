import { useRef, useEffect, useState, useMemo } from "react";
import YouTube, { YouTubeProps } from "react-youtube";

interface IYoutubeSize {
  readonly width: number;
  readonly height: number;
}

const ResponsiveYouTube = ({ videoId }: { videoId: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [youtubeSize, setYoutubeSize] = useState<IYoutubeSize>({
    width: 350,
    height: 330,
  });

  useEffect(() => {
    const updateSize = () => {
      if (!containerRef.current) return;

      const width = containerRef.current.offsetWidth;
      let height = 0;
      switch (width) {
        case 669:
          height = 631;
          break;
        case 500:
          height = 472;
          break;
        case 350:
          height = 330;
          break;
        case 300:
          height = 270;
          break;

        default:
          height = (width * 9) / 16;
          break;
      }

      setYoutubeSize((prev) =>
        prev.width !== width ? { width, height } : prev
      );
    };

    updateSize();

    window.addEventListener("resize", updateSize);
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  const opts = useMemo(
    () => ({
      width: youtubeSize.width,
      height: youtubeSize.height,
      playerVars: {
        autoplay: 0,
      },
    }),
    [youtubeSize]
  );

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    if (!event.target) return;
    event.target.setVolume(0);
    event.target.pauseVideo();
  };

  return (
    <div
      ref={containerRef}
      className="xl:w-[669px] lg:w-[500px] md:w-[350px] xs:w-[300px] rounded-[50px] overflow-hidden"
    >
      <YouTube
        key={`${videoId}-${youtubeSize.width}`}
        videoId={videoId}
        opts={opts}
        onReady={onPlayerReady}
      />
    </div>
  );
};

export default ResponsiveYouTube;
