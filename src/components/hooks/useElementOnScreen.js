import {useEffect, useRef,useState} from 'react'

function useElementOnScreen(options){
    const containerRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    const callbackFunction = (entries) => {
        const [entry] = entries
        setIsVisible(entry.isIntersecting)

    }

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, options)
        if(containerRef.current) observer.observe(containerRef.current)
        console.log(isVisible)
        console.log("IT's working")
        let newRef = containerRef.current
        return () => {
            if(newRef) observer.unobserve(newRef)
        }
    }, [containerRef, options, isVisible])

    return [containerRef, isVisible]
}

export default useElementOnScreen