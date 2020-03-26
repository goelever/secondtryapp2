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
      didsetState: false,
      isLoading: true,
      error: null
    };
  }

  componentDidMount() {
    //const logger = new Logger('foo');
    try {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json(), this.setState({ didfetch: true }))
      .then(
        (data) => {this.setState({ contacts: data })},
        this.setState({ didsetState: true })
        
      
      )
     // .catch(error => this.setState({ error, isLoading: false }));
    }catch(e) {this.setState({ error:e})};
    //}catch(e) {
    // logger.error('error happened', e);
    //    } 
    this.setState({ didmount: true })
    this.setState({ isLoading: false })    
  }
  //.catch(console.log)
  render() {
    const { isLoading, users, error } = this.state;

    return (

      <ul>
        Rendering...
        {<li>Length data: {this.state.contacts.length}</li>}
        {<li>didfetch :: {this.state.didfetch.toString()} </li>}
        {<li>didsetState : {this.state.didsetState.toString()} </li>}
        {<li>Didmount : {this.state.didmount.toString()} </li>}

        {error ? <p>{error.message}</p> : <p>Kein Fehler. Error is {error}</p>}
         {this.state.contacts.map(s => (<li>{s.id}: {s.website}</li>))}
        {/* {!isLoading ? (     )} */}
      // If there is a delay in data, let's let the user know it's loading
      ) : (
        <h3>Loading...</h3>
        )}      
      </ul>
        

    );

  }
}
export default App;

