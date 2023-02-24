import React from 'react'

const Fqline = ({title,para}) => {
  return (
    <>
        <div className="holder">
                    <h2>
                    <span>01</span> {title}<i className="fa-solid fa-plus"></i>
                    </h2>
                    <p>{para}</p>
                </div>
    </>
  )
}

export default Fqline