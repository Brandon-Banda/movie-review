import React, { Component } from 'react';

class Ratings extends Component {

  constructor(props){
    super(props);
    this.state = {
      ratings: [],
    };
  }

  componentDidMount(){
      const ratings = [];
      let rating = this.props.ratings;
      ratings.push({id: rating, ...[rating]});
      this.setState({
        ratings: ratings
      });
    };
  
  render(){
    return (
      <table className="ratings-list">
        <thead>
          <tr>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
        {this.state.ratings.map((rating) => {
          return (
            <tr className="rating" key={rating.id}>
              <td>{rating.name}</td>
              <td>{rating.description}</td>
              <td className="rating-value">{rating.rating}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
    )
  }
}

export default Ratings;