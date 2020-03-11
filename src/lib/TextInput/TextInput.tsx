import React from 'react';
import {Icon, IconType, Input, InputProps} from 'react-native-elements';
import {theme} from '../../theme';
import {styles} from './styles/TextInputStyles';

interface IProps extends InputProps {
  placeHolder: string;
  iconName: string;
  iconType?: IconType;
}

export const TextInput: React.SFC<IProps> = props => (
  <Input
    {...props}
    inputStyle={styles.input}
    containerStyle={styles.container}
    placeholder={props.placeHolder}
    leftIcon={
      <Icon
        name={props.iconName}
        type={props.iconType}
        iconStyle={styles.inputIcon}
        color={theme.colors.lightGray}
      />
    }
  />
);
