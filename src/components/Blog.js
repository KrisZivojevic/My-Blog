import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import './Blog.css';

function Blog(props) {
  const handleClick = () => {
    props.setBlogs(prevState => {
      let copyOldList = prevState.map(blog => {
        if (blog.title === props.item.title) {
          return {...blog, isFavorite: !props.item.isFavorite}
        }

        return blog;
      })

      return copyOldList;
    })
  }
  return (
    <div className="blog">
      <img src={props.item.img} alt={props.item.title} className="blog__img" />
      <div className='blog__header'>
        <h4 className='blog__title'>{props.item.title}</h4>
        <button onClick={handleClick} className="blog__button">{props.item.isFavorite ? <AiFillStar className='yellow-star'/> : <AiOutlineStar className='transparent-star'/>}</button>
      </div>
      <p className='blog__content'>{props.item.content}</p>
    </div>
  )
}

export default Blog;