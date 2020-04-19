import React from 'react';
import Header from './header';
import GradeTable from './grade-table';
import GradeForm from './grade-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grades: [] };
    this.addGrade = this.addGrade.bind(this);
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
    const total = allGrades.reduce((max, cur) => max + Number(cur.grade), 0);
    const average = (total / allGrades.length).toFixed(0);
    return Number(average);
  }

  addGrade(newGrade) {
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/JSON'
      },
      body: JSON.stringify(newGrade)
    };
    fetch('api/grades', req)
      .then(res => res.json())
      .then(dataNewGrade => this.setState({
        grades: this.state.grades.concat(dataNewGrade)
      }))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="container">
        <Header heading="Student Grade Table" averageHeading="Average Grade: " averageGrade={this.getAverageGrade()}/>
        <hr/>
        <div className="row">
          <div className="col-lg-9">
            <GradeTable grades={this.state.grades}/>
          </div>
          <div className="col-lg-3">
            <GradeForm onSubmit={this.addGrade}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
