import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../App.css';
import TrashIcon from '../trash.svg';

class Trash extends Component {
  static propTypes = {
    isVisible: PropTypes.bool.isRequired,
    index: PropTypes.number
  };

  onTrashClicked = () => {
    console.log("Got a click");
    this.props.isClicked(this.props.index);
  }

  onEmptyClicked = () => {
    console.log("Got a click");
    this.props.isEmptyClicked(this.props.index);
  }

  render() {
    let trashIcon = <div className="empty" onClick={this.onEmptyClicked}></div>;
    if (this.props.isVisible) {
      trashIcon = <img src={ TrashIcon } alt="Trash" className="trash" onClick={this.onTrashClicked}/>
    }

    return (
      <div className="bin">
        {trashIcon}
      </div>
    );
  }
}

export default Trash;
