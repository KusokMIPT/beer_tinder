import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SideTopBar.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

class SideTopBar extends React.Component {
  render() {
    return (
      <div className="sidetopbar">
        <span className="header-title">
          <FontAwesomeIcon icon="beer"/> Beerder
        </span>
      </div>
    );
  }
}

export default SideTopBar;
