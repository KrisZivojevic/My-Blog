// TODO: 
// 1. naci 2 svg ikonice (zvezda i obojena zvezda); x
// 2. srediti container stilizaciju; x
// 3. naci slike; x
// 4. section komponentu ubaciti; x

import { useState } from 'react';
import './App.css';
import Section from './components/Section';

function App() {
  const [blogs, setBlogs] = useState([{
    img: "https://c0.wallpaperflare.com/preview/166/603/738/background-blog-coffee-communication.jpg",
    title: "My First Blog Post",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    isFavorite: true
  }, {
    img: "https://i.pinimg.com/originals/20/a2/aa/20a2aadd16493b8038334cf178c501be.jpg",
    title: "My Second Blog Post",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    isFavorite: false
  }, {
    img: 'https://c0.wallpaperflare.com/preview/989/969/256/beverage-blog-blogger-browsing.jpg',
    title: "My Third Blog Post",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    isFavorite: true
  }, {
    img: "https://live.staticflickr.com/4672/38770037135_780d282e07_b.jpg",
    title: "My Forth Blog Post",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    isFavorite: false
  }
])

  return (
    <div className='app'>
      <h1 className='heading'>My Blog</h1>
      <Section heading="All Blogs" setBlogs={setBlogs} blogs={blogs} className="container" /> 
      <Section heading="Favorites" setBlogs={setBlogs} blogs={blogs.filter(blog => blog.isFavorite)} className="container" /> 
    </div>
  );
}

export default App;
