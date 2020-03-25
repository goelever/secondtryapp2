import React from 'react';
import logo from './logo.svg';
import './App.css';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((data) => {
        this.setState({ contacts: data })
      })
  }
//.catch(console.log)
  render() {
    const socialMediaList = this.state.contacts;//data.Experiences;//
    return (
      <ul>
        Hat geklappt1234 8999!
        {/* {socialMediaList.map(s => (<li>{s.companyName}</li>))} */}
        {socialMediaList.map(s => (<li>{s.id}:{s.name}:Website: {s.website}</li>))}
      </ul>
    );
  }
}
export default App;

