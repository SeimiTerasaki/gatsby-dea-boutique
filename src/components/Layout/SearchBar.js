import React, { Component } from "react"
import PropTypes from "prop-types"
import { Index } from "elasticlunr"
import Link from 'gatsby-link'
import { InputGroup, FormControl} from 'react-bootstrap'
import { FiSearch} from 'react-icons/fi'

export default class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
    }
  }

  render() {
    return (
      <>
           <InputGroup size="sm" className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text><FiSearch /></InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    className="search-bar"
                    placeholder="Seach"
                    type="text"
                    value={this.state.query}
                    onChange={this.search} />
              </InputGroup>
              <br/>
              <div className="list-group search-results">
                {this.state.results.map(page => (
                    <li className="list-group-item mw-100" key={page.id}>
                    <Link to={"/product/" + page.slug}>
                {page.title}</Link>
                    </li>
                ))}
              </div>
      </>
    )
  }
  getOrCreateIndex = () =>
  this.index
    ? this.index
    : // Create an elastic lunr index and hydrate with graphql query results
      Index.load(this.props.searchIndex)

search = evt => {
  const query = evt.target.value
  console.log(query)
  this.index = this.getOrCreateIndex()
  this.setState({
    query,
    // Query the index with search string to get an [] of IDs
    results: this.index
      .search(query, {})
      // Map over each ID and return the full document
      .map(({ ref }) => this.index.documentStore.getDoc(ref)),
  })
}
}

SearchBar.propTypes = {
  searchIndex: PropTypes.object,
}