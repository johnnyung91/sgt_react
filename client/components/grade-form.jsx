import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: '',
      isEditing: false
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleName = this.handleName.bind(this);
  }

  handleChange(event) {
    const input = event.target.name;
    this.setState({
      [input]: event.target.value
    });
  }

  handleName(event) {
    this.setState({
      name: event.target.value
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

  componentDidUpdate(pP) {
    const { name, course, grade } = this.props.gradeToEdit;
    if (this.props.gradeToEdit !== pP.gradeToEdit) {
      this.setState({
        name: name,
        course: course,
        grade: grade,
        isEditing: true
      });
    }
  }

  render() {
    const { name, course, grade, isEditing } = this.state;
    const formHeader = isEditing ? 'Update' : 'Add';

    return (
      <form onSubmit={this.handleAdd} onReset={this.handleReset}>
        <h3 className="mb-2">{formHeader} Student</h3>
        <div className="input-group mb-3">
          <span className="input-group-prepend input-group-text"><i className="fa fa-user icon"></i></span>
          <input
            required
            type="text"
            className="form-control"
            placeholder="Student Name"
            name="name"
            value={name}
            onChange={this.handleChange}
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
            value={course}
            onChange={this.handleChange}
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
            value={grade}
            onChange={this.handleChange}
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
