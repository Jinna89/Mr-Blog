import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import ByCategoryPage from './Pages/ByCategoryPage'
import DetailsPage from './Pages/DetailsPage'

const App = () => {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/byCategory/:categoryID' element={<ByCategoryPage></ByCategoryPage>}></Route>
      <Route path='/details/:postID' element={<DetailsPage></DetailsPage>}></Route>
     </Routes>
    
    </BrowserRouter>
  )
}

export default App