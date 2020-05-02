import React from 'react';

function Grade(props) {
  const { name, course, grade, id } = props.grade;
  const { onDelete, editGradeState } = props;

  return (
    <tr>
      <td>{name}</td>
      <td>{course}</td>
      <td>{grade}</td>
      <td>
        <i className="fas fa-edit fa-lg mr-3 blue pointer operation" onClick={() => editGradeState(props.grade) }></i>
        <i className="fas fa-trash fa-lg mr-3 gray pointer operation" onClick={() => onDelete(id)}></i>
      </td>
    </tr>
  );
}

class GradeTable extends React.Component {
  render() {
    const { grades, deleteGrade, editGradeState } = this.props;

    let noGrades;
    const gradeElements = grades.map(grade => <Grade key={grade.id} grade={grade} onDelete={deleteGrade} editGradeState={editGradeState}/>);
    if (!gradeElements.length) {
      noGrades = <p className="mt-3 pl-2">No Grades Displayed</p>;
    }
    return (
      <>
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
        </table>
        {noGrades}
      </>
    );
  }
}

export default GradeTable;
