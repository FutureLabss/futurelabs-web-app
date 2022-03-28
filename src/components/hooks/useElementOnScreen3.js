import { useEffect, useRef } from 'react'

function useElementOnScreen(options){
    const containerRef3 = useRef(null)
    const videoRef3 = useRef(null)

    const callbackFunction = (entries) => {
        const [entry] = entries;

        if(entry.isIntersecting){
            videoRef3.current.play()
        } else {
            videoRef3.current.pause()
        }

    }

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, options)
        if(containerRef3.current) observer.observe(containerRef3.current)
       
        let newRef = containerRef3.current
        return () => {
            if(newRef) observer.unobserve(newRef)
        }
    }, [containerRef3, options])

    return [containerRef3, videoRef3]
}

export default useElementOnScreen