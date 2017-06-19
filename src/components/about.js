import React from 'react';
import {Link} from 'react-router';

class About extends React.Component {

  render() {
    return (
      <div>
          <h1> YO THIS IS A DIFFERENT PAGE </h1>
          <p>
            <Link to = {"/"}> BACK </Link>
          </p>
      </div>
    );
  }

}

export default About;
