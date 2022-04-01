import { useEffect, useRef } from "react";

function useElementOnScreen(options) {
  const containerRef2 = useRef(null);
  const videoRef2 = useRef(null);

  const callbackFunction = (entries) => {
    const [entry] = entries;

    if (entry.isIntersecting) {
      setTimeout(function(){
        videoRef2.current.play();
      }, 1000)
    } else {
      videoRef2.current.pause();
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef2.current) observer.observe(containerRef2.current);

    
    let newRef = containerRef2.current;
    return () => {
      if (newRef) observer.unobserve(newRef);
    };
  }, [containerRef2, options]);

  return [containerRef2, videoRef2];
}

export default useElementOnScreen;
