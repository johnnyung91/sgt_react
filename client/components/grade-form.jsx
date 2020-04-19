import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
    this.handleName = this.handleName.bind(this);
    this.handleCourse = this.handleCourse.bind(this);
    this.handleGrade = this.handleGrade.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleName(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleCourse(event) {
    this.setState({
      course: event.target.value
    });
  }

  handleGrade(event) {
    this.setState({
      grade: event.target.value
    });
  }

  handleAdd(event) {
    event.preventDefault();
    const newGrade = {
      name: this.state.name,
      course: this.state.course,
      grade: this.state.grade
    };
    this.props.onSubmit(newGrade);
    this.setState = {
      name: '',
      course: '',
      grade: ''
    };
    event.target.reset();
  }

  render() {
    return (
      <form onSubmit={this.handleAdd}>
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
            onChange={this.handleName}
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
            onChange={this.handleCourse}
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
            onChange={this.handleGrade}
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
