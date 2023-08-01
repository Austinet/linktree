import kodeCampLogo from './kodecamp-logo-white.png'
import kodeHauzLogo from './kodeHauz-Logo.png'
import './footer.css'

const Footer = () => {
  return (
    <footer>
       <div className="container">
           <ul>
                <li>
                    <img src={kodeCampLogo} alt="KodeCamp logo" />
                </li>
                <li>
                    <p>KodeCamp Internship Task</p>
                </li>
                <li>
                    <img src={kodeHauzLogo} alt="KodeHauz logo" />
                </li>
            </ul>
       </div>
    </footer>
  )
}

export default Footer