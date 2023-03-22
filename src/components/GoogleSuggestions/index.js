import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  suggestionClick = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const filteredList = suggestionsList.filter(each =>
      each.suggestion.toUpperCase().includes(searchInput.toUpperCase()),
    )
    return (
      <div className="M-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="image"
        />
        <div className="S-container">
          <div className="searchBar">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="S-image"
            />
            <input
              type="search"
              onChange={this.onChangeSearchInput}
              value={searchInput}
              className="input"
            />
          </div>
          <ul className="list-container">
            {filteredList.map(each => (
              <SuggestionItem
                key={each.id}
                suggestion={each.suggestion}
                suggestionClick={this.suggestionClick}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
