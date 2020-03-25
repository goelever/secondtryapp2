import React from 'react';
import logo from './logo.svg';
import './App.css';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      didmount: false
    };
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((data) => {
        this.setState({ contacts: data })
      })
    this.setState({didmount: true})
  }
//.catch(console.log)
  render() {
    const socialMediaList = this.state.contacts;//data.Experiences;//
    var first = socialMediaList[0];
    return (
      <ul>
        Hat geklappt1234 8999!
        {/* {socialMediaList.map(s => (<li>{s.companyName}</li>))} */}
        {<li>Laenge socialmedia: {socialMediaList.length}</li>}
        
        {<li>Didmount durchlaufen: {this.state.didmount.toString()} </li>}
        {socialMediaList.map(s => (<li>{s.id}:{s.name}:Website: {s.website}</li>))}
      </ul>
    );
  }
}
export default App;

