import React from 'react'
import {
  BrowserRouter as ViewRouter,
  HashRouter as DataRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from 'react-router-dom'
import {ipcRenderer} from 'electron'
import Home from "./Home";
import Topics from "./Topics";

export default function index() {
  console.log(ipcRenderer.sendSync('synchronous-message', 'ping')) // prints "pong"

  ipcRenderer.on('asynchronous-reply', (event, arg) => {
    console.log(arg) // prints "pong"
  })

  function send(event) {
    ipcRenderer.send('asynchronous-message', 'ping')
  }

  function sendTest(event) {
    ipcRenderer.send('test-message', {details: 'stunning'})
  }

  return (<div>
    <h1>User-Interface Container</h1>
    <button onClick={send} type="button">Send Ping Message</button>
    <button onClick={sendTest} type="button">Send Test Message</button>

    <ViewRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
        </Switch>
      </div>
    </ViewRouter>
  </div>)
}