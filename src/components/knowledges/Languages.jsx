import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
  state = {
    languages: [
      {id:1, value: "Javascript", xp:0.25}
    ],
    frameworks: [
      {id:1, value: "React", xp:0.2}
    ]
  }
  render() {
    let {languages, frameworks} = this.state;
    return (
      <div className="languagesFrameworks">
        <ProgressBar 
          languages={languages}
          className="languagesDisplay"
          title="languages"
        />
        <ProgressBar 
          languages={frameworks}
          className="frameworksDisplay"
          title="frameworks & bibliothèques"/>
      </div>
    );
  }
}

export default Languages;