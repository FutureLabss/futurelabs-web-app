import { useEffect, useRef } from 'react'

function useElementOnScreen(options){
    const containerRef4 = useRef(null)
    const videoRef4 = useRef(null)

    const callbackFunction = (entries) => {
        const [entry] = entries;

        if(entry.isIntersecting){
            setTimeout(function(){
                videoRef4.current.play()
            }, 3000)
        } else {
            videoRef4.current.pause()
        }

    }

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, options)
        if(containerRef4.current) observer.observe(containerRef4.current)
       
        let newRef = containerRef4.current
        return () => {
            if(newRef) observer.unobserve(newRef)
        }
    }, [containerRef4, options])

    return [containerRef4, videoRef4]
}

export default useElementOnScreen