import moment from 'moment';
import React from 'react';
import {Text, View} from 'react-native';
import {Avatar, Card as RNCard, Icon, Rating} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Review} from '../../models';
import {theme} from '../../theme';
import {styles} from './styles/ReviewCardStyles';

interface IProps {
  review: Review;
  onLikePress: () => void;
}

export const ReviewCard: React.SFC<IProps> = props => {
  const [liked, setLiked] = React.useState<boolean>(false);
  return (
    <RNCard containerStyle={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.avatarcontainer}>
          <Avatar
            rounded={true}
            size="small"
            source={props.review.user.avatar}
          />
        </View>
        <View style={styles.reviewContainer}>
          <Text style={styles.name}>{props.review.user.name}</Text>
          <Rating
            type="custom"
            fractions={1}
            ratingColor={theme.colors.green}
            startingValue={props.review.rating}
            ratingTextColor={theme.colors.green}
            imageSize={20}
          />
          <Text style={styles.comment}>{props.review.comment}</Text>
          <View style={styles.cardFooter}>
            <View style={styles.likesContainer}>
              <TouchableOpacity
                hitSlop={{top: 10, left: 10, right: 10, bottom: 10}}
                onPress={() => {
                  setLiked(!liked);
                  props.onLikePress();
                }}>
                <Icon
                  name="ios-heart"
                  type="ionicon"
                  size={16}
                  color={liked ? theme.colors.red : theme.colors.lightGray}
                />
              </TouchableOpacity>
              <Text style={styles.footerText}>
                {liked ? props.review.likes + 1 : props.review.likes}
              </Text>
            </View>
            <Text style={styles.footerText}>
              {moment(props.review.timestamp).format('DD/MM/YYYY')}
            </Text>
          </View>
        </View>
      </View>
    </RNCard>
  );
};
