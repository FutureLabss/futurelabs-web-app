import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate  } from "react-router-dom";
import { useAuth } from  '../../contexts/AuthContext'
import '../styles/cardcomponent.css'
import Articles from '../layouts/Skeleton'

function Cardcomponent() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true)
  const { currentUser } = useAuth()
  const history = useNavigate()
 
  useEffect(() => {
    axios
      .get("")
      .then((res) => {
        setPosts(res.data.articles);
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
      });
    }, []);

    const handleClick = () => {
      if(!currentUser){
        history('/signin')
      }
    }

  return (
    <Articles posts={posts} handleClick={handleClick} loading={loading}/>
  );
}

export default Cardcomponent;
