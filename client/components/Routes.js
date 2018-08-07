import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import Home from '../containers/Home'
class Routes extends Component {
  render () {
    return (
      <ScrollToTop>
        <Switch>
          <Route exact path='/home' component={Home} />
      </Switch>

      </ScrollToTop>
    )
  }
}

export default Routes
