import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import CssDrawings from './pages/CssDrawings'
import ReactNative from './pages/ReactNative'
import WebProjects from './pages/WebProjects'

const App = () => {
    return (
        <>
          <Router>
            <Header/>
            <div className="container">
              <div className="row">
                <Switch>
                  <Route exact path="/" component={Body}/>
                  <Route path="/css" component={CssDrawings}/>
                  <Route path="/react-native" component={ReactNative}/>
                  <Route path="/web-projects" component={WebProjects}/>
                </Switch>
              </div>
              <Footer/>
            </div>
          </Router>
        </>
    )
}

export default App
