import {Attractions} from '../models';

export const getAttractionIcon = (attraction: string) => {
  if (attraction === Attractions.camping) {
    return 'ios-flame';
  } else if (attraction === Attractions.exercises) {
    return 'ios-body';
  } else if (attraction === Attractions.riding) {
    return 'ios-bicycle';
  } else if (attraction === Attractions.food) {
    return 'ios-restaurant';
  } else {
    return 'ios-leaf';
  }
};
