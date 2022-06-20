import ToolBar from "../layout/toolbar";
import useElementOnScreen from "../hooks/useElementOnScreen";
import useElementOnScreen1 from "../hooks/useElementOnScreen1";
import "./strategy.css";
import useSound from "../hooks/useSound";
import { icons } from "../../assets";
import Section from "../layout/section";

export default function Strategy() {
  const [containerRef, videoRef] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });
  const [containerRef1, videoRef1] = useElementOnScreen1({
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });

  const { sound, sound1, handleSound } = useSound(videoRef, videoRef1);

  const data = [
    {
      containerRef: containerRef,
      videoRef: videoRef,
      icon: icons.strategy1,
      src: "https://res.cloudinary.com/eacademy/video/upload/v1643989706/Agency/Strategy.mp4",
      line1: "Strategy",
      line3: "We develop corporate & brand strategies that",
      line4: "set you apart",
      index: 0,
      sound: sound,
      handleSound: handleSound,
    },
    {
      containerRef: containerRef1,
      videoRef: videoRef1,
      icon: icons.strategy2,
      src: "https://res.cloudinary.com/dps0unrwm/video/upload/v1655728128/Futurelabs/Idea_Generation_without_Social_Media_Icons_zrylxn.mp4",
      line1: "Ideas Aren’t Enough",
      line3: "This generation is only fascinated by results, let’s",
      line4: "help you go from ideas to MVPs rapidly",
      index: 1,
      sound: sound1,
      handleSound: handleSound,
    },
  ];

  return (
    <>
      <ToolBar />
      <Section data={data} />
    </>
  );
}
