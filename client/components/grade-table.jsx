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
        <button className="btn btn-success mr-2" onClick={() => editGradeState(props.grade) }>Edit</button>
        <button className="btn btn-danger" onClick={() => onDelete(id)}>Delete</button>
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
