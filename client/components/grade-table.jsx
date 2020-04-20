import React from 'react';

function Grade(props) {
  const name = props.grade.name;
  const course = props.grade.course;
  const grade = props.grade.grade;
  return (
    <tr>
      <td>{name}</td>
      <td>{course}</td>
      <td>{grade}</td>
      <td>
        <button className="btn btn-danger" onClick={() => props.onDelete(props.grade.id)}>Delete</button>
      </td>
    </tr>
  );
}

class GradeTable extends React.Component {
  render() {
    let noGrades;
    const gradeElements = this.props.grades.map(grade => <Grade key={grade.id} grade={grade} onDelete={this.props.deleteGrade}/>);
    if (!gradeElements.length) {
      noGrades = <p className="mt-3 pl-2">No Grades Displayed</p>;
    }
    return (
      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope='col'>Student Name</th>
            <th scope='col'>Student Course</th>
            <th scope='col'>Grade</th>
            <th scope='col'>Operations</th>
          </tr>
        </thead>
        <tbody>
          {gradeElements}
        </tbody>
        {noGrades}
      </table>
    );
  }
}

export default GradeTable;
