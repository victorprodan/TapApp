import React from 'react';
import {Text, View} from 'react-native';
import {Rating} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import MapView, {Marker} from 'react-native-maps';
import {LocationPreview} from '../../../../models';
import {theme} from '../../../../theme';
import {styles} from './styles/SpotMapStyles';

interface IProps {
  location: LocationPreview;
}

const gradientColors: string[] = [
  'rgba(255, 255, 255, .0)',
  'rgba(255, 255, 255, .9)',
  theme.colors.white,
];

export const SpotMap: React.SFC<IProps> = props => (
  <View style={styles.mapContainer}>
    <MapView style={styles.map} region={props.location.region}>
      <Marker coordinate={props.location.region}>
        <View style={styles.mapMarker} />
      </Marker>
    </MapView>
    <LinearGradient colors={gradientColors} style={styles.gradient}>
      <Text style={styles.locationDescription}>{props.location.text}</Text>
      <View style={styles.cardFooter}>
        <Rating
          type="custom"
          fractions={1}
          ratingColor={theme.colors.green}
          startingValue={props.location.rating}
          ratingTextColor={theme.colors.green}
          imageSize={20}
        />
        <Text style={styles.footerText}>{props.location.rating}/5.0</Text>
        <Text style={styles.footerText}>
          {props.location.distance} km nearby
        </Text>
      </View>
    </LinearGradient>
  </View>
);
