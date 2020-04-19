import React from 'react';
import Header from './header';
import GradeTable from './grade-table';

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

  getAverageGrade() {
    const allGrades = this.state.grades;
    const total = allGrades.reduce((max, cur) => max + cur.grade, 0);
    const average = (total / allGrades.length).toFixed(0);
    return average;
  }

  render() {
    return (
      <div className="container">
        <Header heading="Student Grade Table" averageHeading="Average Grade: " averageGrade={this.getAverageGrade()}/>
        <hr/>
        <div className="row">
          <GradeTable grades={this.state.grades}/>
        </div>
      </div>
    );
  }
}

export default App;
