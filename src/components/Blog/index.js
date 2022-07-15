import React, {useEffect} from 'react';
import ToolBar from "../layout/toolbar";
import Styles from "./styles/blog.module.css";
import Cardcomponent from './cardComponent'; 
import Container from '@material-ui/core/Container';
import Footer from "../layout/footer"


function Blog() {
    useEffect(() => {
        document.body.style.overflow = "auto";
    },[])
  return (
    <div className={Styles.blog}>
    <ToolBar />
    <section className={Styles.hero}>
        <aside className={Styles.aside}>
            <div className={Styles.text}>Stories From The <br /> Best Curators</div>
            <div className={Styles.sub_text}>Read well-crafted articles from happenings <br />around the globe</div>
        </aside>
    </section>
    <section>
        <h4 className={Styles.title}>Latest Posts</h4>
    </section>
    <Container maxWidth="lg">

      <Cardcomponent/>
    </Container>
    <div style={{marginBottom:"50px"}}></div>
    <Footer />
    </div>
  )
}

export default Blog