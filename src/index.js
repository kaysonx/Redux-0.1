import React from 'react'
import { render } from 'react-dom'
import Main from './components/Main'
import injectTapEventPlugin from 'react-tap-event-plugin'
import css from './styles/style.css'

import { browserHistory, Router, Route, IndexRoute } from 'react-router'
import ShowCourse from './components/ShowCourse'
import Courses from './components/Courses'

import { Provider } from 'react-redux'
import store, { history } from './store'
import App from './components/App'

injectTapEventPlugin();

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path='/' component={App}>
                <IndexRoute component={Courses}></IndexRoute>
                <Route path='/view/:courseId' component={ShowCourse}></Route>
            </Route>
        </Router>
    </Provider>
)


render(router, document.getElementById('root'));

