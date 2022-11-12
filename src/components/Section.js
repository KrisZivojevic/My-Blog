import React from 'react';
import Blog from './Blog';
import './Section.css';

function Section(props) {
  let content = props.blogs.map((item, index) => <Blog key={index} item={item} setBlogs={props.setBlogs} />)

  return (
    <>
      <h3 className='subheading'>{props.heading}</h3>
      <div className="container">
        {content}
      </div>
    </>
  )
}

export default Section