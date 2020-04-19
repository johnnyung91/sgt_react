import React from 'react';

class GradeForm extends React.Component {
  render() {
    return (
      <form action="">
        <h3>Add Student</h3>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text"></span>
          </div>
          <input
            type="text"
            className="form-control"
            id="student-name-course"
            placeholder="Student Course"
            name="course"
          />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text"></span>
          </div>
          <input
            type="text"
            className="form-control"
            id="student-name-course"
            placeholder="Student Course"
            name="course"
          />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text"></span>
          </div>
          <input
            type="text"
            className="form-control"
            id="student-name-grade"
            placeholder="Student Grade"
            name="grade"
          />
        </div>
        <div className="input-buttons">
          <input className="btn btn-success" type="submit" value="Add" />
          <input className="btn btn-outline-secondary" type="reset" value="Cancel" />
        </div>
      </form>
    );
  }
}

export default GradeForm;
