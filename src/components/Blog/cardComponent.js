import React, { useState, useEffect } from "react";
// import { useNavigate  } from "react-router-dom";
// import { useAuth } from  '../../../contexts/AuthContext'
import './styles/cardComponent.css'
import LazyLoader from './lazyLoading'
import { BlogManager } from '../../services/blog'

const blogManager = new BlogManager()

function Cardcomponent() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true)
  const [pagination, setPagination] = useState(undefined)
  const [page, setPage] = useState(1)
  // const { currentUser } = useAuth()
  // const history = useNavigate()
 
  useEffect(() => {


    blogManager.getAll(page)
    .then(data => {
      console.log(data)
      const {count, limit } = data.pagination;
      let pages;
      let pageCount = Math.ceil(count / limit)
      // console.log("Page Count ===> ", pageCount)
      if(pageCount <= 0){
        pages = 1;
      } else {
        pages = pageCount
      }

      setPagination(pages)

      setPosts(data.data);
    })
    .finally(() => {
      setLoading(false)
    })    
  }, [page]);

    // const handleClick = () => {
    //   if(!currentUser){
    //     history('/signin')
    //   }
    // }

  return (
    <LazyLoader posts={posts} page={page} setPage={setPage} pages={pagination} loading={loading}/>
  );
}

export default Cardcomponent;
