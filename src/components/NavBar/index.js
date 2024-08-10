import {Navbar} from 'react-bootstrap/Navbar'

import {Nav} from 'react-bootstrap/Nav'

import './index.css'

const NavBar = props => {
  const {score, topScore} = props

  return (
    <div>
      <div data-bs-theme="dark">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
        </div>

        <div className="me-auto">
          <h1>Emoji Game</h1>

          <p>Score: {score}</p>

          <p>Top Score: {topScore}</p>
        </div>
      </div>
    </div>
  )
}

export default NavBar
