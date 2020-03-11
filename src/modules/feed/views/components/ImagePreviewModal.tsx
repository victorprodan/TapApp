import React from 'react';
import {Image, ImageSourcePropType, View} from 'react-native';
import {Button, Overlay} from 'react-native-elements';
import {styles} from './styles/ImagePreviewModal';

interface IProps {
  visible: boolean;
  image: ImageSourcePropType;
  onBackdropPress: () => void;
}

export const ImagePreviewModal: React.SFC<IProps> = props => (
  <Overlay
    isVisible={props.visible}
    overlayBackgroundColor="transparent"
    onBackdropPress={props.onBackdropPress}>
    <View>
      <Image source={props.image} style={styles.image} />
      <Button
        buttonStyle={styles.closeButton}
        title="Close"
        onPress={props.onBackdropPress}
      />
    </View>
  </Overlay>
);
