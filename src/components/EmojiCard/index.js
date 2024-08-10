const EmojiCard = props => {
  const {resourse, display} = props

  const {id, emojiName, emojiUrl} = resourse

  const Display = () => {
    display(id)
  }

  return (
    <li>
      <img src={emojiUrl} alt={emojiName} onClick={Display} />
    </li>
  )
}

export default EmojiCard
