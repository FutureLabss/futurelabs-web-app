import ToolBar from "../layout/toolbar";
import useElementOnScreen from "../hooks/useElementOnScreen";
import useElementOnScreen1 from "../hooks/useElementOnScreen1";
import useElementOnScreen2 from "../hooks/useElementOnScreen2";
import useElementOnScreen3 from "../hooks/useElementOnScreen3";
import useElementOnScreen4 from "../hooks/useElementOnScreen4";
import "./services.css";
import { icons } from "../../assets";
import useSound from "../hooks/useSound";
import Section from "../layout/section";

export default function Services() {
  const [containerRef, videoRef] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });

  const [containerRef1, videoRef1] = useElementOnScreen1({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  const [containerRef2, videoRef2] = useElementOnScreen2({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });
  const [containerRef3, videoRef3] = useElementOnScreen3({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });
  const [containerRef4, videoRef4] = useElementOnScreen4({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  const { sound, sound1, sound2, sound3, sound4, handleSound } = useSound(
    videoRef,
    videoRef1,
    videoRef2,
    videoRef3,
    videoRef4
  );

  const data = [
    {
      containerRef: containerRef,
      videoRef: videoRef,
      icon: icons.service1,
      src: "https://res.cloudinary.com/eacademy/video/upload/v1643989706/Agency/Strategy.mp4",
      line1: "Strategy",
      link: "/strategy",
      index: 0,
      sound: sound,
      handleSound: handleSound,
    },
    {
      containerRef: containerRef1,
      videoRef: videoRef1,
      icon: icons.service2,
      src: "https://res.cloudinary.com/dps0unrwm/video/upload/v1655900224/Futurelabs/Products_compilation_wef4u2.mp4",
      line1: "Product Design",
      link: "/products",
      index: 1,
      sound: sound1,
      handleSound: handleSound,
    },
    {
      containerRef: containerRef2,
      videoRef: videoRef2,
      icon: icons.service3,
      src: "https://res.cloudinary.com/dps0unrwm/video/upload/v1655900985/Futurelabs/website_compilation_1_ua7nyt.mp4",
      line1: "Websites",
      link: "/websites",
      index: 2,
      sound: sound2,
      handleSound: handleSound,
    },
    {
      containerRef: containerRef4,
      videoRef: videoRef4,
      icon: icons.service4,
      src: "https://res.cloudinary.com/usenmfon/video/upload/v1650284804/FutureLabs/Final_Branding_Video_faix3v.mp4",
      line1: "Branding & ",
      break: " Advertising",
      link: "/strategy",
      index: 4,
      sound: sound4,
      handleSound: handleSound,
    },
    {
      containerRef: containerRef3,
      videoRef: videoRef3,
      icon: icons.service5,
      src: "https://res.cloudinary.com/usenmfon/video/upload/v1650975960/FutureLabs/All_3D_video_bxracl.mp4",
      line1: "3D Modelling",
      link: "/modelling",
      index: 3,
      sound: sound3,
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
