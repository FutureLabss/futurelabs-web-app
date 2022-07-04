// import {useState} from 'react'
import ToolBar from "../layout/toolbar";
import "./modelling.css";
import { icons } from "../../assets";
import useElementOnScreen from "../hooks/useElementOnScreen";
import useElementOnScreen1 from "../hooks/useElementOnScreen1";
import useElementOnScreen2 from "../hooks/useElementOnScreen2";
import useElementOnScreen3 from "../hooks/useElementOnScreen3";
import useElementOnScreen4 from "../hooks/useElementOnScreen4";
import useSound from "../hooks/useSound";
import Section from "../layout/section";

export default function Modelling() {

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
    videoRef4
  );

  const data = [
    {
      containerRef: containerRef4,
      videoRef: videoRef4,
      icon: icons.modelling1,
      src: "https://res.cloudinary.com/usenmfon/video/upload/v1650975960/FutureLabs/All_3D_video_bxracl.mp4",
      line1: "Noiseless Design",
      line3: "Our deep understanding of curves, tones ",
      line4: "set you apart",
      index: 4,
      sound: sound4,
      handleSound: handleSound,
    },
    {
      containerRef: containerRef,
      videoRef: videoRef,
      icon: icons.modelling2,
      src: "https://res.cloudinary.com/not-set/video/upload/v1644321263/Military_Drone_Animation_by_Maverick_for_FutureLABS_jm6vgp.mp4",
      line1: "3D Modeling",
      line3: "What if a 12 year old genius reimagined the future of",
      line4: "urban transportation, flying cars and all?",
      index: 0,
      sound: sound,
      handleSound: handleSound,
    },
    {
      containerRef: containerRef1,
      videoRef: videoRef1,
      icon: icons.modelling3,
      src: "https://res.cloudinary.com/usenmfon/video/upload/v1656941904/FutureLabs/Triump_Car_Animation_wsfqpa.mp4",
      line1: "Fine Craftmanship",
      line3: "Our team effortlessly achieves masterpieces",
      line4: "on all commissions.",
      index: 1,
      sound: sound1,
      handleSound: handleSound,
    },
    {
      containerRef: containerRef2,
      videoRef: videoRef2,
      icon: icons.modelling1,
      src: "https://res.cloudinary.com/usenmfon/video/upload/v1649856240/FutureLabs/FutureDroid_Final_Animation_hcrlzq.mp4",
      line1: "Craftmanship",
      line3: "Our team effortlessly achieves masterpieces",
      line4: "on all commissions.",
      index: 2,
      sound: sound2,
      handleSound: handleSound,
    },
    {
      containerRef: containerRef3,
      videoRef: videoRef3,
      icon: icons.modelling4,
      src: "https://res.cloudinary.com/not-set/video/upload/v1644404865/VID-20220207-WA0036_zgaqo2.mp4",
      line1: "Imagination",
      line3: "It’s easier to build if we help you picture what your",
      line4: "product will look like before you even get started.",
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
