import React from 'react'

const Pageination = ({totalData,dataPerPage,setCurrentPage,currentPage}) => {
    var pages = []
    for(var i = 1;i<=Math.ceil(totalData/dataPerPage);i++){
        pages.push(i);
    }
  return (
    <div className='pagination'>
        {
            pages.map((page,index)=>(
                <button key={index}   className={page == currentPage ? "active" : ""} onClick={()=>setCurrentPage(page)}>{page}</button>
            ))
        }
    </div>
  )
}

export default Pageination