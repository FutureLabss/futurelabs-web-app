import { useState } from 'react'

function useSound(videoRef,videoRef1,videoRef2,videoRef3){
    const [sound, setSound] = useState(false)
    const [sound1, setSound1] = useState(false)
    const [sound2, setSound2] = useState(false)
    const [sound3, setSound3] = useState(false)

    const handleSound = (value) => {
        if(value === 0){
          setSound(!sound)
          videoRef.current.muted = !videoRef.current.muted;        
        }
        if(value === 1){
          setSound1(!sound1)
          videoRef1.current.muted = !videoRef1.current.muted;
        }
        if(value === 2){
          setSound2(!sound2)
          videoRef2.current.muted = !videoRef2.current.muted;
        }
        if(value === 3){
          setSound3(!sound3)
          videoRef3.current.muted = !videoRef3.current.muted;
        }
      }

    return {sound, sound1, sound2, sound3, handleSound }
}

export default useSound