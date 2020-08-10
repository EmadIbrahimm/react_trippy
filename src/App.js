// import React from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch
// } from 'react-router-dom';
// import './App.css';

// class App extends React.Component {
//   render () {
//     return (
//       <div>
//         <p>Hello</p>
//       </div>
//     );
//   }
// }

// export default App;

import React from 'react';
import '../src/App.css';
import HomeContainer from './containers/HomeContainer';

import { BrowserRouter as Router,
   Route,
   Link,
   Switch
       } from 'react-router-dom';
      
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path='/'>
              <HomeContainer />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
