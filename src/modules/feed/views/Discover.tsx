import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {Card} from '../../../lib/Card/Card';
import {AppRoute, navigate} from '../../../navigation/Navigator';
import {DISCOVER_DATA} from '../../../utils/data';
import {styles} from './styles/DiscoverStyles';

export const Discover: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{flex: 1}} contentContainerStyle={styles.container}>
        {DISCOVER_DATA.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            text={item.text}
            rating={item.rating}
            distance={item.distance}
            onPress={() => {
              navigate(AppRoute.SpotDetails, {location: item});
            }}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
