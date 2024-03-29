import ToolBar from '../layout/toolbar';
import "./products.css"
import {icons} from '../../assets'
import useElementOnScreen from '../hooks/useElementOnScreen';
import useElementOnScreen1 from '../hooks/useElementOnScreen1';
import useElementOnScreen2 from '../hooks/useElementOnScreen2';
import useElementOnScreen3 from '../hooks/useElementOnScreen3';
import useElementOnScreen4 from '../hooks/useElementOnScreen4';
import useSound from '../hooks/useSound';
import Section from '../layout/section';

export default function Products() {

    const [ containerRef, videoRef] = useElementOnScreen({
        root: null,
        rootMargin: "0px",
        threshold: 1
    })

    const [ containerRef1, videoRef1] = useElementOnScreen1({
        root: null,
        rootMargin: "0px",
        threshold: 1
    })

    const [ containerRef2, videoRef2] = useElementOnScreen2({
        root: null,
        rootMargin: "0px",
        threshold: 1
    })

    const [ containerRef3, videoRef3] = useElementOnScreen3({
        root: null,
        rootMargin: "0px",
        threshold: 1
    })

    const [ containerRef4, videoRef4] = useElementOnScreen4({
        root: null,
        rootMargin: "0px",
        threshold: 1
    })

  const {sound, sound1, sound2, sound3, sound4, handleSound } = useSound(videoRef,videoRef1,videoRef2,videoRef3,videoRef4)
  const data = [
    {
      containerRef: containerRef4,
      videoRef: videoRef4,
      icon: icons.product4,
      src: "https://res.cloudinary.com/unlimitedreactive/video/upload/v1671627711/Products_compilation_zmpmzx.mp4",
      line3: "Your product is your strategy and",
      line4: "design thinking determines your",
      line5: "success or failure",
      index: 4,
      sound: sound4,
      handleSound: handleSound,
    },
    {
      containerRef: containerRef2,
      videoRef: videoRef2,
      icon: icons.product1,
      src: "https://res.cloudinary.com/usenmfon/video/upload/v1651836353/FutureLabs/Rude_Ui_animation_kil6nt.mp4",
      line1: "Hail a bike",
      break: "ride with ease",
      index: 2,
      sound: sound2,
      handleSound: handleSound,
    },
    {
      containerRef: containerRef1,
      videoRef: videoRef1,
      icon: icons.product2,
      src: "https://res.cloudinary.com/unlimitedreactive/video/upload/v1671627716/Shopin_animation_oimtji.mp4",
      line1: "Shop for your feet",
      line3: "Get the best footwear on your mobile",
      index: 1,
      sound: sound1,
      handleSound: handleSound,
    },
    {
      containerRef: containerRef3,
      videoRef: videoRef3,
      icon: icons.product3,
      src: "https://res.cloudinary.com/usenmfon/video/upload/v1653400836/FutureLabs/Money_nudfwv.mp4",
      line1: "Make Faster & ",
      break: "Secure Payments",
      index: 3,
      sound: sound3,
      handleSound: handleSound,
    },
    {
      containerRef: containerRef,
      videoRef: videoRef,
      icon: icons.product4,
      src: "https://res.cloudinary.com/unlimitedreactive/video/upload/v1671627716/FUture_pay_phone_render_2_vgeve1.mp4",
      line1: "Securing Payments for Tomorrow",
      line3: "Seamless Cross-border Payments and",
      line4: "Currency Conversion",
      index: 0,
      sound: sound,
      handleSound: handleSound,
    },
  ];

return (
    <div className="bod">
    <ToolBar />
    <Section data={data}/>
    </div>
)
}