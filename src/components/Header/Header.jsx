import profileImg from './profile__img.jpg'
import './header.css'

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='profile-details'>
          <div className="profile">
             <img src={profileImg} alt="profile image" />
             <h1>John Doe</h1>
          </div>
          <div className="">
              <button id='share-btn'>  </button>
          </div>
        </div>
      </div>   
    </header>
  )
}

export default Header