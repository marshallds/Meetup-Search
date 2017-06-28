import React from 'react';

export default class Meetup extends React.Component {

  render() {
    let backgroundImageUrl = (this.props.item.key_photo && this.props.item.key_photo.photo_link) ?
      this.props.item.key_photo.photo_link : 'https://unsplash.it/300/200/?random';
    let imageStyle = {
      backgroundImage: 'url(' + backgroundImageUrl + ')'
    }

    return(
      <div className="small-6 large-4 columns">
        <div className="card callout">
          <a href={this.props.item.link} target="_blank" rel="noopener noreferrer">
            <div className="card-image"
                style={imageStyle}>
            </div>
          </a>
          <h6 className="card-title">
            <a href={this.props.item.link} target="_blank" rel="noopener noreferrer">
              {this.props.item.name}
            </a>
          </h6>
          <p>Members: {this.props.item.members.toLocaleString()} {this.props.item.who}</p>
        </div>
      </div>
    )
  }
}
