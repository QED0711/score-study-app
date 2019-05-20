import React, {Component} from 'react';

import './App.css';

import ProductTable from './components/ProductTable'
import UserSignUp from './components/UserSignUp';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello World!!!</h1>
        <UserSignUp />
        {/* <ProductTable /> */}
      </div>
    )
  }
}

export default App;
