import React from 'react';
import './App.css';
import Menu from './components/Menu';
import List from './components/List'



class App extends React.Component{

    constructor(props){
      super(props);
      this.state = {
        books:[
          {id:0, rating:2, title:"Harry potter y la piedra", image:'libro01.jpg'},
          {id:1, rating:5, title:"Heller & Mary", image:'libro03.jpg'},
          {id:2, rating:1, title:"Cien años de soledad", image:'libro02.jpg'},
          {id:3, rating:4, title:"Campanita", image:'libro04.jpg'},
        ]
      };
    }
 render() {
    return (
    <div className="app">
      <Menu title="Amozon" />
      <List items={this.state.books}/>
    </div>
    );
  } 
}


export default App;
