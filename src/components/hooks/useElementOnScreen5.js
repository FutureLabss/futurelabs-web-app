import { useEffect, useRef } from 'react'

function useElementOnScreen(options){
    const containerRef5 = useRef(null)
    const videoRef5 = useRef(null)

    const callbackFunction = (entries) => {
        const [entry] = entries;

        if(entry.isIntersecting){
            setTimeout(function(){
                videoRef5.current.play()
            }, 3000)
        } else {
            videoRef5.current.pause()
        }

    }

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, options)
        if(containerRef5.current) observer.observe(containerRef5.current)
       
        let newRef = containerRef5.current
        return () => {
            if(newRef) observer.unobserve(newRef)
        }
    }, [containerRef5, options])

    return [containerRef5, videoRef5]
}

export default useElementOnScreen