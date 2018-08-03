import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import Layout from './containers/Layout'
import configureStore from './store'
import startSagas from './sagas'
import routes from './routes'
import serviceWorker from './serviceWorker'

serviceWorker()

export const store = configureStore()

startSagas()

const mapRouteToRouteComponent = r => <Route {...r} key={r.path} />

ReactDOM.render(<div>
  <Provider store={store}>
    <HashRouter>
      <Layout>
        <Switch>
          {routes.map(mapRouteToRouteComponent)}
        </Switch>
      </Layout>
    </HashRouter>
  </Provider>
</div>, document.getElementById('app'))
