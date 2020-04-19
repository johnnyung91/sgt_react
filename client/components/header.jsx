import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="row align-items-center mt-2">
        <div className="col-lg-9">
          <h1>{this.props.heading}</h1>
        </div>
        <div className="col-lg-3 text-right">
          <h3>
            {this.props.averageHeading}
            <span className="badge badge-secondary">
              {isNaN(this.props.averageGrade) ? '--' : this.props.averageGrade}
            </span>
          </h3>
        </div>
      </div>
    );
  }
}

export default Header;
