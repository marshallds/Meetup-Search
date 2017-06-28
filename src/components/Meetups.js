import React from 'react';

import Meetup from './Meetup';

export default class Meetups extends React.Component {

  render() {
    let rows = [];

    if (this.props.groups) {
      this.props.groups.forEach((item, index) => {
        rows.push(<Meetup key={index} index={index} item={item} />);
      });
    }

    return (
      <div className="row">
        {rows}
      </div>
    );
  }
}
