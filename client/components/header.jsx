import React from 'react';

class Header extends React.Component {
  render() {
    const { heading, averageGrade, averageHeading } = this.props;
    return (
      <div className="row align-items-center mt-2">
        <div className="col-lg-8">
          <h1 className="mb-0">{heading}</h1>
        </div>
        <div className="col-lg-4 text-right">
          <h3 className="mb-0">
            {averageHeading}
            <span className="badge badge-secondary">
              {isNaN(averageGrade) ? '--' : averageGrade}
            </span>
          </h3>
        </div>
      </div>
    );
  }
}

export default Header;
