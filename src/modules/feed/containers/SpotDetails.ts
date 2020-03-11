import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {RootState} from '../../../state';
import {AppActionTypes} from '../../../state/appActions';
import {IActionProps, IObjectProps, SpotDetails} from '../views/SpotDetails';

const mapStateToProps = (state: RootState): IObjectProps => ({
  checkedInLocations: state.app.checkedInSpots,
});

const mapDispatchToProps = (dispatch: Dispatch): IActionProps => ({
  onCheckInPress: location =>
    dispatch({type: AppActionTypes.checkInSpot, payload: location}),
});

export const SpotDetailsConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SpotDetails);
