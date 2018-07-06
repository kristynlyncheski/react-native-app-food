import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import BusinessDetail from './BusinessDetail';
import KEY from '../../private/key';

class BusinessList extends Component {
  state = { businesses: [] };

  componentWillMount() {
    const options = {
      method: 'GET',
      headers: { Authorization: `Bearer ${KEY}` },
      url: 'https://api.yelp.com/v3/businesses/search?location=10005&categories=food&open_now=true'
    };

    axios(options)
      .then(response => {
        console.log(response.data);
        return this.setState({ businesses: response.data.businesses });
      })
      .catch(error => {
        console.log(error.response);
      });
  }

  renderBusinesses() {
    return this.state.businesses.map((business) => {
      return <BusinessDetail key={business.id} business={business} />;
    });
  }

  render() {
    return (
      <ScrollView>
        {this.renderBusinesses()}
      </ScrollView>
    );
  }
}

export default BusinessList;
