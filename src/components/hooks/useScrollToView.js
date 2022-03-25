import {useEffect} from 'react'

function useScrollToView(count,sectionZeroRef,sectionOneRef,sectionTwoRef,sectionThreeRef,sectionFourRef,sectionFiveRef){
    useEffect(() => {
        document.addEventListener('keydown', function(e){
            if(e.key === "ArrowDown" && count <= 4){
              e.preventDefault()
              count++
              console.log(count)
              if(count === 0){
                sectionZeroRef.current.scrollIntoView()
              }
              if(count === 1){
                sectionOneRef.current.scrollIntoView()
              }
              if(count === 2){
                sectionTwoRef.current.scrollIntoView()
              }
              if(count === 3){
                sectionThreeRef.current.scrollIntoView()
              }
              if(count === 4){
                sectionFourRef.current.scrollIntoView()
              }
              if(count === 5){
                sectionFiveRef.current.scrollIntoView()
              }
            }
      
            if(e.key === "ArrowUp" && count !== 0){
              e.preventDefault()
              --count
             
              if(count === 0){
                sectionZeroRef.current.scrollIntoView()
              }
              if(count === 1){
                sectionOneRef.current.scrollIntoView()
              }
              if(count === 2){
                sectionTwoRef.current.scrollIntoView()
              }
              if(count === 3){
                sectionThreeRef.current.scrollIntoView()
              }
              if(count === 4){
                sectionFourRef.current.scrollIntoView()
              }
              if(count === 5){
                sectionFiveRef.current.scrollIntoView()
              }
            }
        })
        
      },[count,sectionZeroRef,sectionOneRef,sectionTwoRef,sectionThreeRef,sectionFourRef,sectionFiveRef])
}

export default useScrollToView