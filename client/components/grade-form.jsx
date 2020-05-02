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
    this.handleUpdate = this.handleUpdate.bind(this);
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
    const { name, course, grade } = this.state;
    event.preventDefault();
    const newGrade = {
      name: name,
      course: course,
      grade: grade
    };
    this.props.onSubmit(newGrade);
    this.resetState();
  }

  handleUpdate(event) {
    const { name, course, grade } = this.state;
    event.preventDefault();
    const updateGrade = {
      id: this.props.gradeToEdit.id,
      name: name,
      course: course,
      grade: grade
    };
    this.props.onUpdate(updateGrade);
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
      grade: '',
      isEditing: false
    });
  }

  componentDidUpdate(prevProp) {
    const { name, course, grade } = this.props.gradeToEdit;
    if (this.props.gradeToEdit !== prevProp.gradeToEdit) {
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
    const formButton = isEditing ? this.handleUpdate : this.handleAdd;

    return (
      <form onSubmit={formButton} onReset={this.handleReset}>
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
            type="number"
            max="100"
            className="form-control"
            placeholder="Student Grade"
            name="grade"
            value={grade}
            onChange={this.handleChange}
          />
        </div>
        <div className="input-buttons">
          <button className="btn btn-success mr-2" type="submit">{formHeader}</button>
          <button className="btn btn-outline-secondary" type="reset">Cancel</button>
        </div>
      </form>
    );
  }
}

export default GradeForm;
