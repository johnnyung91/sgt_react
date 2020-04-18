import React from 'react';
import Header from './header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grades: [] };
  }

  componentDidMount() {
    this.getAllGrades();
  }

  getAllGrades() {
    fetch('api/grades')
      .then(res => res.json())
      .then(grades => this.setState({ grades: grades }))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Header />
        </div>
      </div>
    );
  }
}

export default App;
