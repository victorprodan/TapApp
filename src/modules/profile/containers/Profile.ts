import {connect} from 'react-redux';
import {RootState} from '../../../state';
import {IObjectProps, Profile} from '../views/Profile';

const mapStateToProps = (state: RootState): IObjectProps => ({
  checkedInLocations: state.app.checkedInSpots,
});

export const ProfileConnected = connect(mapStateToProps)(Profile);
