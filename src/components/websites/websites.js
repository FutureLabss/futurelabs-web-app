import ToolBar from "../layout/toolbar";
import "./websites.css";
import useElementOnScreen from "../hooks/useElementOnScreen";
import useElementOnScreen1 from "../hooks/useElementOnScreen1";
import useElementOnScreen2 from "../hooks/useElementOnScreen2";
import useElementOnScreen3 from "../hooks/useElementOnScreen3";
import useElementOnScreen4 from "../hooks/useElementOnScreen4";
import useSound from "../hooks/useSound";
import { icons } from "../../assets";
import Section from "../layout/section";

export default function Websites() {
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

  const [containerRef3, videoRef3] = useElementOnScreen3({
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });

  const [containerRef4, videoRef4] = useElementOnScreen4({
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });

  const { sound, sound1, sound2, sound3, sound4, handleSound } = useSound(
    videoRef,
    videoRef1,
    videoRef2,
    videoRef3,
    videoRef4,
  );

  const data = [
    {
      containerRef: containerRef4,
      videoRef: videoRef4,
      icon: icons.website1,
      src: "https://res.cloudinary.com/dps0unrwm/video/upload/v1657964152/Futurelabs/website_compilation_1_islpiz.mp4",
      line3: "Websites are the heart of the internet, a creative",
      line4: "website sets the tone for the impactful branding and ",
      line5: "marketing of your product and services",
      index: 4,
      sound: sound4,
      handleSound: handleSound,
    },
    {
      containerRef: containerRef,
      videoRef: videoRef,
      icon: icons.website1,
      src: "https://res.cloudinary.com/not-set/video/upload/v1640267570/around_main_comp_d1x979.mp4",
      line1: "Around",
      line3: "An extraordinary noise-canceling experience",
      line4: "requires an extraordinary website",
      index: 0,
      sound: sound,
      handleSound: handleSound,
    },
    {
      containerRef: containerRef1,
      videoRef: videoRef1,
      icon: icons.website2,
      src: "https://res.cloudinary.com/usenmfon/video/upload/v1651836346/FutureLabs/VID_20220316_175006_638_lgldqz.mp4",
      line1: "Emmy Chris",
      line3: "We partnered with Minister EmmyChris",
      line4: "to bring the gospel closer to worshippers",
      index: 1,
      sound: sound1,
      handleSound: handleSound,
    },
    {
      containerRef: containerRef3,
      videoRef: videoRef3,
      icon: icons.website4,
      src: "https://res.cloudinary.com/dps0unrwm/video/upload/v1655388215/Futurelabs/final_future_ride_2_eihmjl.mp4",
      line1: "Transcend",
      line3: "Reimagining the future",
      line4: "of transportation in Akwa Ibom",
      index: 3,
      sound: sound3,
      handleSound: handleSound,
    },
    {
      containerRef: containerRef2,
      videoRef: videoRef2,
      icon: icons.website3,
      src: "https://res.cloudinary.com/not-set/video/upload/v1645534184/VID-20220217-WA0018_rtkkjs.mp4",
      line1: "Seamless Cross-border",
      line3: "Payments and Currency Conversion",
      line4: "Securing Payments for Tomorrow on the Web",
      index: 2,
      sound: sound2,
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
