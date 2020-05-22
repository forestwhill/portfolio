import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Page from './hoc/Page'
import { About, Landing, Projects, Resume } from './hoc/pages'

ReactDOM.render(
  <Router>
    <Page>
      <Switch>
        <Route path='/' exact component={Landing} />
        <Route path='/story' exact component={About} />
        <Route path='/projects' exact component={Projects} />
        <Route path='/resume' exact component={Resume} />
      </Switch>
    </Page>
  </Router>,
  document.getElementById('root')
)
