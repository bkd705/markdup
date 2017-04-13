import { Router, Route, IndexRoute } from 'inferno-router'
import createBrowserHistory from 'history/createBrowserHistory'

import App from '../App'
import Editor from '../editor/Editor'
import Viewer from '../viewer/Viewer'
import NoMatch from '../no-match/NoMatch'

export const browserHistory = createBrowserHistory()


const routes = (
  <Router history={browserHistory}>
    <Route component={App}>
      <IndexRoute component={Editor} />
      <Route path="/:id" component={Viewer} />
      <Route path="/:id/edit" component={Editor} />
      <Route path="/:id/*" component={NoMatch} />
      {/* <Route path="/:id/delete" component={Delete} /> */}
    </Route>
  </Router>
)

export default routes
