import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({album}) => {
  // in th above, see how we use es6 destructuring to eliminate the repitition of props.album
  // in the below, we use es6 destructuring to eliminate the use of album.title, album.artist and album.thumbnail_image

  const {artist, title, thumbnail_image, image, url} = album;
  const {thumbnailStyle, headerContentStlye, thumbnailContainStyle, headerTextStyle, imageStyle} = styles;
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainStyle}> 
          <Image style={thumbnailStyle} source={{ uri: thumbnail_image }}/> 
        </View>
        <View style={headerContentStlye}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist }</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={imageStyle}  source={{ uri: image}}/>
      </CardSection>
      <CardSection>
        <Button onPress = { ()=> Linking.openURL(url)}>
          Buy Now
        </Button>
      </CardSection>
    </Card>
  );
};
const styles = {
  headerContentStlye: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle:{
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainStyle: {
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageStyle:{
    height: 300,
    flex: 1, // fill entire width
    width: null
  }
}
export default AlbumDetail;