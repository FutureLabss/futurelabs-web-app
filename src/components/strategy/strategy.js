import ToolBar from "../layout/toolbar";
import useElementOnScreen from "../hooks/useElementOnScreen";
import useElementOnScreen1 from "../hooks/useElementOnScreen1";
import useElementOnScreen2 from "../hooks/useElementOnScreen2";
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
  const [containerRef2, videoRef2] = useElementOnScreen2({
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });

  const { sound, sound1, sound2, handleSound } = useSound(videoRef, videoRef1, videoRef2);

  const data = [
    {
      containerRef: containerRef,
      videoRef: videoRef,
      icon: icons.strategy1,
      src: "https://res.cloudinary.com/eacademy/video/upload/v1643989706/Agency/Strategy.mp4",
      line1: "Vision & Growth",
      line3: "Vision propels growth, we help startups scale by asking",
      line4: "the right question : why",
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
    {
      containerRef: containerRef2,
      videoRef: videoRef2,
      icon: icons.strategy3,
      src: "https://res.cloudinary.com/dps0unrwm/video/upload/v1655897190/Futurelabs/Project_1000_zlcrat.mp4",
      line1: "Bringing You Project 1000",
      line3: "We partnered with American Cybersecurity",
      line4: "experts to train young mindswith digital skills,",
      line5: "as a means to fight cyber fraud",
      index: 2,
      sound: sound2,
      handleSound: handleSound,
      mute: true,
    },
  ];

  return (
    <>
      <ToolBar />
      <Section data={data} />
    </>
  );
}
