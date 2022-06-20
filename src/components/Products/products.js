import ToolBar from '../layout/toolbar';
import "./products.css"
import {icons} from '../../assets'
import useElementOnScreen from '../hooks/useElementOnScreen';
import useElementOnScreen1 from '../hooks/useElementOnScreen1';
import useElementOnScreen2 from '../hooks/useElementOnScreen2';
import useElementOnScreen3 from '../hooks/useElementOnScreen3';
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

  const {sound, sound1, sound2, sound3, handleSound } = useSound(videoRef,videoRef1,videoRef2,videoRef3)
  const data = [
    {
      containerRef: containerRef2,
      videoRef: videoRef2,
      icon: icons.product1,
      src: "https://res.cloudinary.com/usenmfon/video/upload/v1651836353/FutureLabs/Rude_Ui_animation_kil6nt.mp4",
      line1: "Access Your Computer",
      break: "Science Curriculum on the Go",
      line3: "Redefining the science of computers",
      index: 2,
      sound: sound2,
      handleSound: handleSound,
    },
    {
      containerRef: containerRef1,
      videoRef: videoRef1,
      icon: icons.product2,
      src: "https://res.cloudinary.com/usenmfon/video/upload/v1650284802/FutureLabs/Shopin_animation_qgq2kq.mp4",
      line1: "Shop for your feet",
      line3: "Securing Payments for Tomorrow",
      index: 1,
      sound: sound1,
      handleSound: handleSound,
    },
    {
      containerRef: containerRef3,
      videoRef: videoRef3,
      icon: icons.product3,
      src: "https://res.cloudinary.com/usenmfon/video/upload/v1653400836/FutureLabs/Money_nudfwv.mp4",
      line1: "Make",
      break: "Faster & Secure",
      break1: "Payments",
      index: 3,
      sound: sound3,
      handleSound: handleSound,
    },
    {
      containerRef: containerRef,
      videoRef: videoRef,
      icon: icons.product4,
      src: "https://res.cloudinary.com/dps0unrwm/video/upload/v1655735652/Futurelabs/FUture_pay_phone_render_2_tgoalm.mp4",
      line1: "Seamless Cross-border",
      break: "Payments and Currency",
      break1: "Conversion",
      line3: "Securing Payments for Tomorrow",
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