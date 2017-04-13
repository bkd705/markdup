import { Router, Route, IndexRoute } from 'inferno-router'
import createBrowserHistory from 'history/createBrowserHistory'

import Layout from '../layouts'
import Editor from '../editor/Editor'
import Viewer from '../viewer/Viewer'
import NoMatch from '../no-match/NoMatch'

export const browserHistory = createBrowserHistory()


const routes = (
  <Router history={browserHistory}>
    <Route component={Layout}>
      <IndexRoute component={Editor} />
      <Route path="/md/:id" component={Viewer} />
      <Route path="/md/:id/edit" component={Editor} />
      <Route path="/md/:id/*" component={NoMatch} />
    </Route>
  </Router>
)

export default routes
