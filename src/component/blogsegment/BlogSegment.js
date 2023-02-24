import React from 'react'

const BlogSegment = ({sp,img,para,title}) => {
  return (
    <>
        <div className="item"><img src={img} alt="Blog photo"/>
                    <p>
                        {sp}
                    </p>
                    <h3>{title}</h3>
                    <p>{para} </p>
                    <a className="price" href="">View Pricing <i className="fa-solid fa-right-long"></i></a>
                </div>
    </>
  )
}

export default BlogSegment