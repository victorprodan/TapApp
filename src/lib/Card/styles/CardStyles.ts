import {StyleSheet} from 'react-native';
import {theme} from '../../../theme';

export const styles = StyleSheet.create({
  text: {
    marginBottom: 10,
    fontSize: 17,
    color: theme.colors.text,
    marginTop: 5,
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerText: {
    paddingLeft: 20,
    textTransform: 'uppercase',
    color: theme.colors.text,
    fontSize: 11,
  },
});
