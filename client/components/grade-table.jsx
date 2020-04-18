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
    </tr>
  );
}

class GradeTable extends React.Component {
  render() {
    const gradeElements = this.props.grades.map(grade => <Grade key={grade.id} grade={grade} />);
    return (
      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope='col'>Student Name</th>
            <th scope='col'>Student Course</th>
            <th scope='col'>Grade</th>
          </tr>
        </thead>
        <tbody>
          {gradeElements}
        </tbody>
      </table>
    );
  }
}

export default GradeTable;
