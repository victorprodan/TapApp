import {RouteProp} from '@react-navigation/native';
import _ from 'lodash';
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Avatar, Button, Icon} from 'react-native-elements';
import {ReviewCard} from '../../../lib/ReviewCard.tsx/ReviewCard';
import {LocationPreview} from '../../../models';
import {AppRoute, RouteParamList} from '../../../navigation/Navigator';
import {theme} from '../../../theme';
import {getAttractionIcon} from '../../../utils/locations';
import {ImagePreviewModal} from './components/ImagePreviewModal';
import {SpotMap} from './components/SpotMap';
import {styles} from './styles/SpotDetailsStyles';

export interface IObjectProps {
  checkedInLocations: LocationPreview[];
}

export interface IActionProps {
  onCheckInPress: (location: LocationPreview) => void;
}

interface IBorderedIcon {
  iconName: string;
}

const BorderedIcon: React.SFC<IBorderedIcon> = props => (
  <View style={styles.iconBorder}>
    <Icon
      name={props.iconName}
      type="ionicon"
      size={32}
      color={theme.colors.text}
    />
  </View>
);

export const SpotDetails: React.FC<
  IObjectProps & IActionProps & {route: RouteProp<RouteParamList, AppRoute>}
> = props => {
  const [imagePreviewOpen, setImagePreviewOpen] = React.useState<boolean>(
    false,
  );
  const [
    selectedImage,
    setselectedImage,
  ] = React.useState<ImageSourcePropType | null>(null);

  if (!props.route.params) {
    return null;
  }

  const location = props.route.params.location;

  const imagesSecondRow = _.times(4, _.constant(location.image));
  const avatars = _.times(4, _.constant(theme.images.avatar));

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.container}>
        <SpotMap location={location} />
        <View style={styles.content}>
          <View style={styles.attractionsContainer}>
            {location.attractions.map((attraction, index) => (
              <BorderedIcon
                key={index}
                iconName={getAttractionIcon(attraction)}
              />
            ))}
          </View>
          <View style={styles.imagesContainer}>
            <TouchableOpacity
              style={styles.imageButton}
              onPress={() => {
                setselectedImage(location.image);
                setImagePreviewOpen(true);
              }}>
              <Image source={location.image} style={styles.imageLarge} />
            </TouchableOpacity>
            <View style={styles.moreImagesContainer}>
              {imagesSecondRow.map((image, index) => (
                <TouchableOpacity
                  style={[
                    styles.imageButton,
                    {
                      marginLeft: index !== 0 ? 5 : 0,
                    },
                  ]}
                  key={index}
                  onPress={() => {
                    setselectedImage(image);
                    setImagePreviewOpen(true);
                  }}>
                  <Image source={image} style={styles.imageSmall} />
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={styles.visitorsContainer}>
            <View style={styles.visitorsAvatarsContainer}>
              {avatars.map((avatar, index) => (
                <Avatar
                  containerStyle={{
                    marginLeft: index !== 0 ? -10 : 0,
                    borderWidth: 2,
                    borderColor: theme.colors.white,
                  }}
                  key={index}
                  rounded={true}
                  size="small"
                  source={avatar}
                />
              ))}
            </View>
            <Text style={{color: theme.colors.text, flex: 1}}>
              +82 MORE HAVE BEEN HERE
            </Text>
          </View>
          <Button
            disabled={
              !!props.checkedInLocations.find(spot => spot === location)
            }
            titleStyle={styles.actionButtonTitle}
            buttonStyle={styles.actionButton}
            containerStyle={styles.actionButtonContainer}
            title={
              !!props.checkedInLocations.find(spot => spot === location)
                ? 'ALREADY CHECKED IN'
                : 'CHECK IN HERE'
            }
            onPress={() => {
              props.onCheckInPress(location);
            }}
          />
          <Text style={styles.recommendationsText}>
            {location.reviews.length} recommendations
          </Text>
        </View>
        {location.reviews.map((review, index) => (
          <ReviewCard onLikePress={() => null} key={index} review={review} />
        ))}
      </ScrollView>
      {selectedImage && (
        <ImagePreviewModal
          image={selectedImage}
          visible={imagePreviewOpen}
          onBackdropPress={() => {
            setImagePreviewOpen(false);
            setselectedImage(null);
          }}
        />
      )}
    </SafeAreaView>
  );
};
