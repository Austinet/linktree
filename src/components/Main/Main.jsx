import data from '/src/data.js'
import slackImg from './slack.png'
import githubImg from './social-icon.png'
import './main.css'

const Main = () => {
  return (
    <main>
       <section className='link-container container'>
          <ul className='links-container'>
             {
               data.map(links => (
                 <li key={links.name}>
                   <a href={links.link}>{links.name}</a>
                 </li>
               ))
             }
          </ul>
          <div>
             <ul className="socials">
                <li>
                    <a href=""><img src={slackImg} alt="Slack icon" /></a>
                </li>
                <li>
                    <a href=""><img src={githubImg} alt="Github icon" /></a>
                </li>
             </ul>
          </div>
      </section>
 </main>
  )
}

export default Main