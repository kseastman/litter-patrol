import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../App.css';
import TrashIcon from '../trash.svg';

class Trash extends Component {
  static propTypes = {
    isVisible: PropTypes.bool.isRequired,
  };

  render() {
    let trashIcon = null;
    if (this.props.isVisible) {
      trashIcon = <img src={ TrashIcon } alt="Trash" className="trash"></img>
    }

    return (
      <div className="bin">
        {trashIcon}
      </div>
    );
  }
}

export default Trash;
