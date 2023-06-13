import React from 'react'
import Link from 'next/link'
import Search from '../../../Search/Search'
import Pagination from '../../../Pagination'
const OverView = () => {
  return (
   <div className='container'>
   <h1 className='overview'>Over View</h1>
   <Search/>
   <Pagination/>
   </div>
  )
}

export default OverView