import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

//Module requires
import TodoComponent from "./components/todoList";
import About from './components/about';
require("./components/css/index.css");


class App extends React.Component{
    render() {
        return(
            <Router history = {browserHistory}>
              <div>
                <Route path = {'/'} component = {TodoComponent}></Route>
                <Route path = {'/about'} component = {About}></Route>
              </div>
            </Router>
        );
    }
}


ReactDOM.render(<App />, document.getElementById("root"));
