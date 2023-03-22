import './index.css'

const SuggestionItem = props => {
  const {suggestion, suggestionClick} = props

  const onClick = () => {
    suggestionClick(suggestion)
  }
  return (
    <li className="suggestion-card-container">
      <p className="suggestion"> {suggestion} </p>
      <button onClick={onClick} type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
          alt="arrow"
          className="arrow-img"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
