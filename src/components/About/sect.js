import "./about.css"
export default function Sect(props){
    return(
        <div className="container-fluid section2">
  <div className="row">

    <div className="col-sm-6 section2-box1">

      <div className="section2-box1-inner">
        <h3 className=".">
          {props.title}
        </h3>
        <br />
        <h5 className="fonty"> {props.subtitle} </h5>
      </div>
      
    </div>

    <div className="col-sm-6 p-0 section2-box2">
      <div className="image2 bg-danger">
        <img className="img-fluid section2-mute" src={props.img} alt="" />
        
        <div className="section2-mobile-yes">
          <h3 className="section2-mobile-inner">
            We enable you to
            <br />
            see beyond the now.
            <br />
            You could either be
            <br />
            android or you go 
            <br />
            extinct like
            <br />
            Blackberry...” 
          </h3>
          {/* <br /> */}
        <h5 className="fonty">WE ARE FUTURISTS!</h5>
        <img className="img-fluid mutty" src={props.img} alt="" />
        
      </div>
      </div>
      
    </div>
  </div>
</div>


    )
}

{/* <Sect title={'This is  heading'} img={'dfsfdsfd'} subtitle={'this is a subtitle'} />


<Sect title={'Just a diffrent title'} /> */}
