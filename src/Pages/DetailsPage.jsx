import React, { useEffect, useState } from 'react'
import Layout from '../Layout/Layout'
import { useParams } from 'react-router-dom'
import { postDetails } from '../ApiRequest/ApiRequest'
import Loader from '../Componet/Loader'
import BlogDetails from '../Componet/BlogDetails'

const DetailsPage = () => {
  let {postID} = useParams();
  let [list, setList] = useState(null);

  useEffect(()=>{
    (async()=>{
     let res = await postDetails(postID);
     setList(res)
    })()
  },[postID])
  return (
    <Layout>
      {list===null?<Loader/>:<BlogDetails list={list}/>}
    </Layout>
  )
}

export default DetailsPage