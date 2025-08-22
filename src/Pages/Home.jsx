import React, { useEffect, useState } from 'react';
import Layout from '../Layout/Layout.jsx';
import BlogList from '../Componet/BlogList.jsx';
import { postLatest } from '../ApiRequest/ApiRequest.js';
import Loader from '../Componet/Loader.jsx';

const Home = () => {

  const [list, setList] = useState(null)

   useEffect(()=>{
    (async()=>{
     let res = await postLatest()
     setList(res)
    })()
   },[])

  return (
    <Layout>
            {list===null?<Loader/>:<BlogList list={list} />}
        </Layout>
  )
}

export default Home