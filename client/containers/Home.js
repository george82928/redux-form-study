import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Template Project</h1>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    data: state.data
  }
}

export default connect(
  mapStateToProps,
  null
)(Home)
