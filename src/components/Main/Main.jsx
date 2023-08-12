import data from '/src/data.js'
import List from './List'
import slackImg from './slack.png'
import githubImg from './social-icon.png'
import './main.css'

const Main = () => {
  return (
    <main>
       <section className='link-container container'>
          <ul className='links-container'>
             {
               data.map(link => (
                  <List key={link.id} {...link}/>
               ))
             }
          </ul>
          <div>
             <ul className="socials">
                <li>
                    <a href="https://kodecamp20.slack.com"><img src={slackImg} alt="Slack icon" /></a>
                </li>
                <li>
                    <a href="https://github.com/kodehauz"><img src={githubImg} alt="Github icon" /></a>
                </li>
             </ul>
          </div>
      </section>
 </main>
  )
}

export default Main