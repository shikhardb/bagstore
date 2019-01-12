import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const All_ITEMS_QUERY = gql`
  query All_ITEMS_QUERY {
    items {
      id
      title
      price
      description
      image
      largeImage
    }
  }
`;

export default class Items extends Component {
  render() {
    return (
      <div>
        <p>Items </p>
      </div>
    );
  }
}
