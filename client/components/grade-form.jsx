import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
  }

  render() {
    return (
      <form action="">
        <h3 className="mb-2">Add Student</h3>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text"><i className="fa fa-user"></i></span>
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
            <span className="input-group-text"><i className="fa fa-list"></i></span>
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
            <span className="input-group-text"><i className="fa fa-graduation-cap"></i></span>
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
          <input className="btn btn-success mr-2" type="submit" value="Add" />
          <input className="btn btn-outline-secondary" type="reset" value="Cancel" />
        </div>
      </form>
    );
  }
}

export default GradeForm;
