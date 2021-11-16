import "./services.css"
import ToolBar from "../layout/toolbar"
import { Link } from "react-router-dom"

export default function strategy () {
    return (
       <div>
           <ToolBar />
           <section>
           <div className="picture2">
           <div className="punchbox21 text-white container">

<h4 className="punchlines1 veers">
  Strategy
</h4>

<Link to="/strategy"><button  className="but2 mb-5 mt-3">Learn more</button></Link>
  


</div>


      
    



          


</div>
           </section>
           <section>
               <div className="pictures12">
               <div className="punchbox21 text-white container">

<h4 className="punchlines20 veer">
Product
</h4>

<h5 className="sub-lines20">
Design
</h5>

<Link to="/product-design"><button  className="but2 mb-5 mt-3">Learn more</button></Link>
  


</div>
               </div>
           </section>

           <section>
               <div className="pictures13">
               <div className="punchbox22 text-white container">

<h4 className="punchlines21 veer">
Websites
</h4>

<Link to="/websites"><button  className="but2 mb-5 mt-3">Learn more</button></Link>
  


</div>
               </div>
           </section>

           <section>
               <div className="pictures14">
               <div className="punchbox22 text-white container">

<h4 className="punchlines22 veer">
3D Modeling
</h4>

<Link to="/modelling"><button  className="but2 mb-5 mt-3">Learn more</button></Link>
  


</div>
               </div>
           </section>

           <section>
               <div className="pictures16">
               <div className="punchbox22 text-white container">

<h4 className="punchlines23 veer">
Digital Art
</h4>

<Link to="/digital-art"><button  className="but2 mb-5 mt-3">Learn more</button></Link>
  


</div>
               </div>
           </section>    

           <section>
               <div className="pictures17">
               <div className="punchbox22 text-white container">

<h4 className="punchlines24 veer">
Branding &
</h4>

<h5 className="sub-lines21">
Advertising
</h5>

<Link to="/branding-&-advertising"><button  className="but2 mb-5 mt-3">Learn more</button></Link>
  


</div>
               </div>
           </section>    

</div>

   )
}