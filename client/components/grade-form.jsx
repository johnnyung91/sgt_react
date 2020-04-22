import React from 'react';

function Input(props) {
  return (
    <input required type="text" className="form-control" placeholder={props.placeholder} name={props.name} value={props.value} onChange={props.onChange}/>
  );
}

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
    return (
      <form onSubmit={this.handleAdd} onReset={this.handleReset}>
        <h3 className="mb-2">Add Student</h3>
        <div className="input-group mb-3">
          <span className="input-group-prepend input-group-text"><i className="fa fa-user icon"></i></span>
          <Input placeholder="Student Name" name="name" value={this.state.name} onChange={this.handleChange} />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-prepend input-group-text"><i className="fa fa-list icon"></i></span>
          <Input placeholder="Student Course" name="course" value={this.state.course} onChange={this.handleChange} />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-prepend input-group-text"><i className="fa fa-graduation-cap icon"></i></span>
          <Input placeholder="Student Grade" name="grade" value={this.state.grade} onChange={this.handleChange} />
        </div>
        <div className="input-buttons">
          <input className="btn btn-success mr-2" type="submit" value="Add" />
          <input className="btn btn-outline-secondary" type="reset" value="Cancel"/>
        </div>
      </form>
    );
  }
}

export default GradeForm;
