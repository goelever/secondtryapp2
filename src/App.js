import React from 'react';
import logo from './logo.svg';
import './App.css';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      didmount: false,
      didfetch: false,
      didsetState: false
    };
  }

  componentDidMount() {
    //const logger = new Logger('foo');
    //try {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json(), this.setState({ didfetch: true }))
      .then((data) => {
        this.setState({ contacts: data })
      },
        this.setState({ didsetState: true })) 
        
    //}catch(e) {
         // logger.error('error happened', e);
    //    } 
          this.setState({ didmount: true })
    }
  //.catch(console.log)
  render() {

    return (
      <ul>
        Rendering...
        {<li>Length data: {this.state.contacts.length}</li>}
        {<li>didfetch :: {this.state.didfetch.toString()} </li>}
        {<li>didsetState : {this.state.didsetState.toString()} </li>}
        {<li>Didmount : {this.state.didmount.toString()} </li>}
        {this.state.contacts.map(s => (<li>{s.id}: {s.website}</li>))}
      </ul>
    );
  }
}
export default App;

