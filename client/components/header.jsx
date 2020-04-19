import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Student Grade Table</h1>
        <h3>
          {this.props.averageHeading}
          <span className="badge badge-secondary">
            {isNaN(this.props.averageGrade) ? '--' : this.props.averageGrade}
          </span>
        </h3>
      </header>
    );
  }
}

export default Header;
