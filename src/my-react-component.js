import React from 'react'

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'aaaa';
    }

    // Display a "Like" <button>
    return (
        <button onClick={() => this.setState({ liked: true })}>
         Like dsfadsfsd dsfds svfsgsdfgfd
        </button>
    );
  
  }
}

export default LikeButton