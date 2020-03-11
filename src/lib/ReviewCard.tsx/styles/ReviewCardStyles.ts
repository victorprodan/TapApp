import {StyleSheet} from 'react-native';
import {theme} from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    margin: 0,
  },
  name: {
    fontSize: 16,
    color: theme.colors.black,
    marginBottom: 5,
  },
  contentContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  comment: {
    fontSize: 14,
    color: theme.colors.text,
    marginTop: 10,
    marginBottom: 5,
  },
  avatarcontainer: {
    flex: 1,
    alignItems: 'center',
  },
  reviewContainer: {
    flex: 4,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  cardFooter: {
    marginTop: 5,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    marginVertical: 5,
  },
  footerText: {
    color: theme.colors.text,
    fontSize: 11,
    marginLeft: 5,
  },
});
