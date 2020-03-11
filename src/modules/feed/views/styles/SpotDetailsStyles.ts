import {StyleSheet} from 'react-native';
import {theme} from '../../../../theme';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  scrollView: {
    flex: 1,
  },
  mapContainer: {
    height: 350,
    width: '100%',
  },
  text: {
    marginBottom: 10,
    fontSize: 17,
    color: theme.colors.text,
    marginTop: 5,
  },
  content: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 20,
    backgroundColor: theme.colors.white,
  },
  attractionsContainer: {
    paddingVertical: 20,
    flexDirection: 'row',
    backgroundColor: theme.colors.white,
  },
  imageButton: {
    flex: 1,
  },
  imageLarge: {
    width: '100%',
    height: 160,
  },
  imageSmall: {
    width: '100%',
    height: 64,
  },
  visitorsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 26,
  },
  visitorsAvatarsContainer: {
    flexDirection: 'row',
    marginRight: 10,
  },
  iconBorder: {
    padding: 4,
    marginRight: 10,
    borderWidth: 1,
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: theme.colors.lightGray,
  },
  imagesContainer: {
    backgroundColor: theme.colors.white,
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  moreImagesContainer: {
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 5,
    flexDirection: 'row',
    flex: 1,
  },
  actionButtonContainer: {
    marginTop: 30,
    alignSelf: 'center',
    width: '60%',
  },
  actionButton: {
    backgroundColor: theme.colors.green,
    paddingHorizontal: 60,
    paddingVertical: 16,
    borderRadius: 100,
  },
  actionButtonTitle: {
    fontSize: 12,
    color: theme.colors.white,
  },
  recommendationsText: {
    color: theme.colors.black,
    fontSize: 17,
    marginVertical: 31,
  },
});
