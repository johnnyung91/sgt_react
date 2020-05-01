import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const input = event.target.name;
    this.setState({
      [input]: event.target.value
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
    this.resetState();
  }

  handleReset(event) {
    event.preventDefault();
    this.resetState();
  }

  resetState() {
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  render() {
    const { name, course, grade } = this.state;
    const { gradeToEdit } = this.props;
    const formName = !gradeToEdit.id ? name : gradeToEdit.name;
    const formCourse = !gradeToEdit.id ? course : gradeToEdit.course;
    const formGrade = !gradeToEdit.id ? grade : gradeToEdit.grade;

    return (
      <form onSubmit={this.handleAdd} onReset={this.handleReset}>
        <h3 className="mb-2">Add Student</h3>
        <div className="input-group mb-3">
          <span className="input-group-prepend input-group-text"><i className="fa fa-user icon"></i></span>
          <input
            required
            type="text"
            className="form-control"
            placeholder="Student Name"
            name="name"
            value={formName}
            onChange={this.handleName}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-prepend input-group-text"><i className="fa fa-list icon"></i></span>
          <input
            required
            type="text"
            className="form-control"
            placeholder="Student Course"
            name="course"
            value={formCourse}
            onChange={this.handleCourse}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-prepend input-group-text"><i className="fa fa-graduation-cap icon"></i></span>
          <input
            required
            type="text"
            className="form-control"
            placeholder="Student Grade"
            name="grade"
            value={formGrade}
            onChange={this.handleGrade}
          />
        </div>
        <div className="input-buttons">
          <button className="btn btn-success mr-2" type="submit">Add</button>
          <button className="btn btn-outline-secondary" type="reset">Cancel</button>
        </div>
      </form>
    );
  }
}

export default GradeForm;
