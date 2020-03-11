import {StyleSheet} from 'react-native';
import {theme} from '../../../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 40,
    paddingBottom: 80,
  },
  avatarContainer: {
    width: 120,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarBadgeContainer: {
    justifyContent: 'center',
    bottom: 0,
    right: 0,
    alignItems: 'center',
    borderRadius: 100,
    borderWidth: 3,
    borderColor: theme.colors.white,
    position: 'absolute',
    backgroundColor: theme.colors.green,
  },
  avatarBadge: {
    padding: 10,
    fontSize: 14,
    color: theme.colors.white,
  },
  userInfoContainer: {
    marginTop: 24,
    alignItems: 'center',
    flexDirection: 'column',
  },
  userName: {
    fontSize: 24,
    color: theme.colors.black,
  },
  smallText: {
    textTransform: 'uppercase',
    fontSize: 11,
    marginTop: 8,
    color: theme.colors.text2,
  },
  chartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 39,
    marginHorizontal: 36,
  },
  checkInNumberContainer: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  checkInsNumber: {
    fontSize: 36,
    marginTop: 4,
    color: theme.colors.black,
  },
  chart: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionButtonsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderBottomColor: theme.colors.lightGray,
    borderBottomWidth: 1,
  },
  sectionButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionButtonText: {
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 12,
  },
  sectionButtonUnderline: {
    alignSelf: 'center',
    height: 2,
    marginTop: 16,
    width: 28,
  },
  sectionContent: {
    flex: 1,
    backgroundColor: theme.colors.lightGray,
  },
});
