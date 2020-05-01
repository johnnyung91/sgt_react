import React from 'react';
import Header from './header';
import GradeTable from './grade-table';
import GradeForm from './grade-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: [],
      gradeToEdit: {}
    };
    this.addGrade = this.addGrade.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
    this.editGradeState = this.editGradeState.bind(this);
    this.updateGrade = this.updateGrade.bind(this);
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

  deleteGrade(id) {
    const { filter } = this.state.grades;
    const req = {
      method: 'DELETE'
    };
    fetch(`api/grades/${id}`, req)
      .then(() => {
        const filtered = filter(grade => grade.id !== id);
        this.setState({
          grades: filtered
        });
      })
      .catch(err => console.error(err));
  }

  editGradeState(data) {
    this.setState({
      gradeToEdit: data
    });
  }

  updateGrade(gradeObject) {
    const { grades } = this.state;
    const index = grades.findIndex(index => index.id === gradeObject.id);
    const req = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/JSON'
      },
      body: JSON.stringify(gradeObject)
    };
    fetch(`/api/grades/${gradeObject.id}`, req)
      .then(res => res.json())
      .then(updatedGrade => {
        const newGrades = grades.slice(0);
        newGrades[index] = updatedGrade;
        this.setState({
          grades: newGrades
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="container">
        <Header heading="Student Grade Table" averageHeading="Average Grade: " averageGrade={this.getAverageGrade()}/>
        <hr className="mt-2"/>
        <div className="row">
          <div className="col-lg-9">
            <GradeTable grades={this.state.grades} deleteGrade={this.deleteGrade} editGradeState={this.editGradeState}/>
          </div>
          <div className="col-lg-3">
            <GradeForm onSubmit={this.addGrade} onUpdate={this.updateGrade} gradeToEdit={this.state.gradeToEdit}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
