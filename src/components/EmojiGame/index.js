/* 

Quick Tip 



- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.



const shuffledEmojisList = () => {

  const {emojisList} = this.props

  return emojisList.sort(() => Math.random() - 0.5)

}



*/

import {Component} from 'react'

import NavBar from '../NavBar'

import './index.css'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    score: 0,

    topScore: 0,

    emoji: [],

    k: [],

    isActive: false,
  }

  display = id => {
    const shuffledEmojisList = () => {
      const {emojisList} = this.props

      return emojisList.sort(() => Math.random() - 0.5)
    }

    const {k} = this.state

    if (k.includes(id) === false) {
      this.setState(prevState => ({
        k: [...prevState.k, id],

        score: prevState.score + 1,
      }))
    } else {
      this.setState({
        isActive: true,
      })
    }
  }

  restartgame = () => {
    const {score, topScore} = this.state

    if (score > topScore) {
      this.setState({
        topScore: score,

        score: 0,

        isActive: false,

        k: [],
      })
    } else {
      this.setState({
        score: 0,

        isActive: false,

        k: [],
      })
    }
  }

  render() {
    const shuffledEmojisList = () => {
      const {emojisList} = this.props

      return emojisList.sort(() => Math.random() - 0.5)
    }

    const {score, topScore, emoji, isActive} = this.state

    const {emojisList} = this.props

    const container = isActive ? (
      <WinOrLoseCard score={score} restartgame={this.restartgame} />
    ) : (
      emojisList.map(each => (
        <EmojiCard key={each.id} resourse={each} display={this.display} />
      ))
    )

    return (
      <div className="main-container">
        <div>
          <NavBar score={score} topScore={topScore} />
        </div>

        <h1>Emoji Game</h1>

        <ul>{container}</ul>
      </div>
    )
  }
}

export default EmojiGame
