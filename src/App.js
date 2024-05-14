import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import ListaTareas from './listaTareas/listaTareas';
class App extends Component {    
  render() {        
      return (
        <>            
          <h1>Hello Dojo</h1>
          <ListaTareas />
        </>       
         
      );    
  }
}

export default App;
