import { useEffect, useRef } from 'react'

function useElementOnScreen(options){
    const containerRef = useRef(null)
    const videoRef = useRef(null)

    const callbackFunction = (entries) => {
        const [entry] = entries

        if(entry.isIntersecting){
            setTimeout(function(){
                videoRef.current.play()
            }, 1000)
        } else {
            videoRef.current.pause()
        }

    }

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, options)
        if(containerRef.current) observer.observe(containerRef.current)
       
        let newRef = containerRef.current
        return () => {
            if(newRef) observer.unobserve(newRef)
        }
    }, [containerRef, options])

    return [containerRef, videoRef]
}

export default useElementOnScreen