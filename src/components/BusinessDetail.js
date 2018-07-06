import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

class BusinessDetail extends Component {

  render() {
    const styles = {
      headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        flex: 1
      },
      headerTextStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'red',
        marginTop: 5,
        marginBottom: 5,
      },
      headerCategoryStyle: {
        color: 'gray',
        fontStyle: 'italic'
      },
      headerDistanceStyle: {
        color: 'gray',
        width: 75,
        textAlign: 'right',
      },
      thumbnailStyle: {
        height: 75,
        width: 75
      },
      thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
      }
    };

    const {
      id,
      name,
      categories,
      image_url
    } = this.props.business;

    const {
      headerContentStyle,
      headerTextStyle,
      headerCategoryStyle,
      thumbnailStyle,
      thumbnailContainerStyle,
      headerDistanceStyle
    } = styles;

    const renderCategory = (category, i) => {
      const punctuation = i < categories.length - 1 ? ', ' : '';
      return `${category.title.toLowerCase()}${punctuation}`;
    };

    return (
      <Card onPress={() => console.log('clicking', id)}>
        <CardSection>
          <View style={thumbnailContainerStyle}>
            <Image
              style={thumbnailStyle}
              source={{ uri: image_url }}
            />
          </View>
          <View style={headerContentStyle}>
            <Text style={headerTextStyle}>{name}</Text>
            <Text style={headerCategoryStyle}>
              {categories.map((category, i) => renderCategory(category, i))}
            </Text>
          </View>
          <View style={headerContentStyle}>
            <Text style={headerDistanceStyle}>0.3 mi</Text>
          </View>
        </CardSection>
      </Card>
    );
  }
}

export default BusinessDetail;
