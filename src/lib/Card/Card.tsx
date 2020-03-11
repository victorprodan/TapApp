import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Card as RNCard, Rating} from 'react-native-elements';
import {ImageSource} from 'react-native-vector-icons/Icon';
import {theme} from '../../theme';
import {styles} from './styles/CardStyles';

interface IProps {
  image: ImageSource;
  text: string;
  rating: number;
  distance?: number;
  onPress: () => void;
}

export const Card: React.SFC<IProps> = props => (
  <TouchableOpacity onPress={() => props.onPress()}>
    <RNCard image={props.image}>
      <Text style={styles.text}>{props.text}</Text>
      <View style={styles.cardFooter}>
        <Rating
          type="custom"
          fractions={1}
          ratingColor={theme.colors.green}
          startingValue={props.rating}
          ratingTextColor={theme.colors.green}
          imageSize={20}
        />
        <Text style={styles.footerText}>{props.rating}/5.0</Text>
        {props.distance && (
          <Text style={styles.footerText}>{props.distance} km nearby</Text>
        )}
      </View>
    </RNCard>
  </TouchableOpacity>
);
