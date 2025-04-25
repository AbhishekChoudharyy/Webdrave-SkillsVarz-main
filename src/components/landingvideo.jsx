import React, { useState, useRef, useEffect } from 'react';

const Video = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const videoRef = useRef(null);
  const [videoDimensions, setVideoDimensions] = useState({ width: '100%', height: '100%' });

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded && videoRef.current) {
      videoRef.current.play();
    }
  };

  // Function to calculate video dimensions based on screen size and orientation
  const calculateVideoDimensions = () => {
    if (isExpanded && videoRef.current) {
      const videoAspectRatio = videoRef.current.videoWidth / videoRef.current.videoHeight;
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const screenAspectRatio = screenWidth / screenHeight;

      let width, height;

      if (screenAspectRatio > videoAspectRatio) {
        // Screen is wider than the video (e.g., landscape)
        height = '90vh';
        width = `calc(${height} * ${videoAspectRatio})`;
      } else {
        // Screen is taller than the video (e.g., portrait)
        width = '90vw';
        height = `calc(${width} / ${videoAspectRatio})`;
      }

      setVideoDimensions({ width, height });
    }
  };

  // Recalculate dimensions on window resize or orientation change
  useEffect(() => {
    if (isExpanded) {
      calculateVideoDimensions();
      window.addEventListener('resize', calculateVideoDimensions);
      window.addEventListener('orientationchange', calculateVideoDimensions);
    }

    return () => {
      window.removeEventListener('resize', calculateVideoDimensions);
      window.removeEventListener('orientationchange', calculateVideoDimensions);
    };
  }, [isExpanded]);

  return (
    <>
      <div
        className={`${
          isExpanded
            ? 'fixed inset-0 w-full h-full m-auto z-50 bg-black/90 flex items-center justify-center'
            : 'absolute top-[80%] -translate-y-1/2 right-4 w-[180px] h-[100px]'
        } rounded-lg overflow-hidden transition-all duration-500 ease-in-out cursor-pointer group origin-bottom-right z-40`}
        onClick={toggleExpand}
      >
        <video
          autoPlay
          muted
          ref={videoRef}
          className={`w-full h-full object-cover ${
            isExpanded ? 'scale-100' : 'scale-100 hover:scale-110'
          } origin-bottom-right transition-transform duration-300`}
          controls={isExpanded}
          src="https://res.cloudinary.com/dpwj6nisl/video/upload/v1735329081/Showreel-landscape_fkeduh.mp4"
          style={
            isExpanded
              ? {
                  width: videoDimensions.width,
                  height: videoDimensions.height,
                }
              : {}
          }
        >
          Your browser does not support the video tag.
        </video>

        {/* Custom Poster Overlay - Only show when not playing */}
        {!isExpanded && !videoRef.current?.played.length && (
          <div className="absolute inset-0 bg-purple flex items-center justify-center">
            <h2 className="text-light font-spacebold text-lg md:text-xl tracking-wider">WEB SHOWREEL</h2>
          </div>
        )}

        {/* Custom Controls Overlay - Only show when not expanded */}
        {!isExpanded && (
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <button
              className="text-white bg-primary/80 rounded-full p-2 md:p-3 transform hover:scale-110 transition-transform"
              onClick={(e) => {
                e.stopPropagation();
                toggleExpand();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Backdrop for expanded state */}
      {isExpanded && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={toggleExpand}
        />
      )}
    </>
  );
};

export default Video;
