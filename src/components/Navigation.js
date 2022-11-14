import './Navigation.css';

function Navigation(props) {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Career</li>
        <li>Contact us</li>
        <li onClick={props.handleModal}>Create new blog</li>
      </ul>
    </nav>
  )
}

export default Navigation;