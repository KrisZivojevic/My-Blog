import { useState } from 'react';
import './Modal.css';

function Modal(props) {
  const [modalState, setModalState] = useState({
    title: "",
    content: "",
    img: ""
  })

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name
    console.log(value);
    console.log(name);
    setModalState(modalState => {
      return {...modalState, [name]: value}
    });
  }

  const handleCreate = (event) => {
    event.preventDefault();
    props.addBlog(modalState);
    props.handleCancel();
  }
  return (
      <div className="blog-modal">
        <form className='blog-modal__form'>
          <h3 className='blog-modal__heading'>Your new blog post</h3>
          <input placeholder="Enter title" onChange={handleChange} name="title" />
          <textarea placeholder="Type content..." rows={20} cols={50} onChange={handleChange} name="content" />
          <input placeholder="Paste image link" onChange={handleChange} name="img" />
          <div className='blog-modal__controls'>
            <button onClick={handleCreate} className="blog-modal__create-btn">Create</button>
            <button onClick={props.handleCancel} className="blog-modal__cancel-btn">Cancel</button>
          </div>
        </form>
      </div>
  )
}

export default Modal;