import React, { Component } from 'react';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false,
    }
    this.handleInfo = this.handleInfo.bind(this)
  }

  handleInfo() {
    this.setState({showInfo: !this.state.showInfo})
  }



  render() {
    let {name, source, info, picture} = this.props.item;

    return (
      <div className="project">
        <h3>{name}</h3>
        <img src={picture} alt="pic" onClick={this.handleInfo}/>
        <span className="infos" onClick={this.handleInfo}>
          <i className="fa fa-plus-circle"></i>
        </span>

        {
          this.state.showInfo && (
            <div className="showInfos">
              <div className="infosContent">
                <div className="head">
                  <h2>{name}</h2>
                  <div className="sourceCode">
                    <a href={source} rel="noopener noreferrer" className="button" target="_blank">Code source</a>
                  </div>
                </div>

                <p className="text">{info}</p>

                <div className="button return" onClick={this.handleInfo}>Retourner sur la page</div>
              </div>
            </div>
          )
        }
      </div>
    );
  }
}

export default Project;