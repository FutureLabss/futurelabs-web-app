import { useEffect, useRef } from 'react'

function useElementOnScreen(options){
    const containerRef1 = useRef(null)
    const videoRef1 = useRef(null)

    const callbackFunction = (entries) => {
        const [entry] = entries

        if(entry.isIntersecting){
            setTimeout(function(){
                videoRef1.current.play()
            }, 2000)
        } else {
            videoRef1.current.pause()
        }

    }

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, options)
        if(containerRef1.current) observer.observe(containerRef1.current)
       
        let newRef = containerRef1.current
        return () => {
            if(newRef) observer.unobserve(newRef)
        }
    }, [containerRef1, options])

    return [containerRef1, videoRef1]
}

export default useElementOnScreen