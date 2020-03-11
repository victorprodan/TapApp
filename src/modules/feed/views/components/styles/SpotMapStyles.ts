import {StyleSheet} from 'react-native';
import {theme} from '../../../../../theme';

export const styles = StyleSheet.create({
  gradient: {
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 100,
    paddingHorizontal: 20,
  },
  locationDescription: {
    fontSize: 21,
    color: theme.colors.text,
    marginBottom: 5,
    paddingTop: 20,
  },
  map: {
    flex: 1,
  },
  mapMarker: {
    width: 32,
    height: 32,
    backgroundColor: theme.colors.white,
    borderRadius: 18,
    borderWidth: 10,
    borderColor: theme.colors.black,
  },
  mapContainer: {
    height: 350,
    width: '100%',
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
