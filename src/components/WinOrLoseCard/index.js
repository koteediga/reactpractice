const WinOrLoseCard = props => {
  const {score, restartgame} = props

  const restartGame = () => {
    restartgame()
  }

  const text = score <= 11 ? 'Lose' : 'Won'

  const imgurl =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  return (
    <div>
      <h1>You {text}</h1>

      <img src={imgurl} alt="loose" />

      <h1>Best Score{score}</h1>

      <button type="button" onClick={restartGame}>
        Play Again
      </button>
    </div>
  )
}

export default WinOrLoseCard
