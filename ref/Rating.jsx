import React, { Component } from 'react';
import StarRating from './StarRating';
import { withRouter } from "react-router";
import queryString from 'query-string';

class Rating extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rating: 0
    };
  }

  setRating = rating => {
    this.setState({ rating: rating });
  }

  componentDidMount(){
    const rateValue = queryString.parse(this.props.locaton.search);
      const data = localStorage.getItem("rating-state");
      if (rateValue) {
        this.setRating(rateValue);
        console.log(rateValue);
      } else if (data && !rateValue) {
        // if there is rating data and no URL param
        this.setRating(JSON.parse(data));
        console.log("data  " + JSON.parse(data));
      }
    }
    
    componentDidMount(){
        // some kinda for each rating set a new rating in local storage
      localStorage.setItem("rating-state", JSON.stringify(this.state.rating));
    }


  render() {
    return (
      <div className="rating-form">
        <div className="form-input rating">
          <label htmlFor="rating">Rating:</label>
          <StarRating
            numberOfStars="5"
            currentRating="0"
            onClick={this.setRating}
          />
        </div>
      </div>
    );
  }
}


export default withRouter(Rating);