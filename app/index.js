import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import Layout from './containers/Layout'
import configureStore from './store'
import startSagas from './sagas'
import routes from './routes'
import registerServiceWorker from './utils/registerServiceWorker'

export const store = configureStore()

startSagas()
registerServiceWorker('/sw.bundle.js')

const mapRouteToRouteComponent = r => <Route {...r} key={r.path} />

ReactDOM.render(<div>
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <Switch>
          {routes.map(mapRouteToRouteComponent)}
        </Switch>
      </Layout>
    </BrowserRouter>
  </Provider>
</div>, document.getElementById('app'))
