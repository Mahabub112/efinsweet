import React from 'react'
import BlogSegment from '../blogsegment/BlogSegment'
import "./blog.css"
const Blog = () => {
  return (
    <>
         <div className="blog">
            <div className="container">
                <h3>Our blog</h3>
                <div className="box">
                    <BlogSegment sp="19 Jan 2022" para="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract" title="How one Webflow user grew his single person consultancy from $0-100K in 14 months" img="photo/apple-monitors-326518.png" />
                    <BlogSegment sp="19 Jan 2022" para="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract" title="How one Webflow user grew his single person consultancy from $0-100K in 14 months" img="photo/apple-monitors-326518.png" />
                    <BlogSegment sp="19 Jan 2022" para="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract" title="How one Webflow user grew his single person consultancy from $0-100K in 14 months" img="photo/apple-monitors-326518.png" />
                
                {/* <div className="item"><img src="photo/apple-monitors-326518.png" alt="Blog photo"/>
                    <p>19 Jan 2022</p>
                    <h3>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
                    <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                    <a className="price" href="">View Pricing <i className="fa-solid fa-right-long"></i></a>
                </div>
                <div className="item"><img src="photo/apple-monitors-326518.png" alt="Blog photo"/>
                    <p>19 Jan 2022</p>
                    <h3>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
                    <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                    <a className="price" href="">View Pricing <i className="fa-solid fa-right-long"></i></a>
                </div> */}
                </div>
            </div>
        </div>
    </>
  )
}

export default Blog