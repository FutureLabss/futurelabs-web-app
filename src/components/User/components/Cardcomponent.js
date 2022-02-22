import React, { useState, useEffect } from "react";
// import { useNavigate  } from "react-router-dom";
// import { useAuth } from  '../../../contexts/AuthContext'
import '../../styles/cardcomponent.css'
import Articles from '../../layouts/Skeleton'
import { BlogManager } from '../../../services/blog'

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
      const {count, limit } = data.pagination
      let pages;
      let pageCount = Math.floor(count / limit)
      
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
    <Articles posts={posts} page={page} setPage={setPage} pages={pagination} loading={loading}/>
  );
}

export default Cardcomponent;
