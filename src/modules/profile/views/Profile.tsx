import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {Avatar} from 'react-native-elements';
import {Card} from '../../../lib/Card/Card';
import {LocationPreview} from '../../../models';
import {AppRoute, navigate} from '../../../navigation/Navigator';
import {theme} from '../../../theme';
import {styles} from './styles/ProfileStyles';

interface ISectionButtonProps {
  title: string;
  active: boolean;
  onPress: () => void;
}

enum ActiveSection {
  favoriteSpots = 'favoriteSpots',
  myReviews = 'myReviews',
}

export interface IObjectProps {
  checkedInLocations: LocationPreview[];
}

const SectionButton: React.SFC<ISectionButtonProps> = props => (
  <TouchableOpacity onPress={props.onPress}>
    <Text
      style={[
        styles.sectionButtonText,
        {
          color: props.active ? theme.colors.green : theme.colors.text,
        },
      ]}>
      {props.title}
    </Text>
    <View
      style={[
        styles.sectionButtonUnderline,
        {
          backgroundColor: props.active ? theme.colors.green : 'transparent',
        },
      ]}
    />
  </TouchableOpacity>
);

export const Profile: React.FC<IObjectProps> = props => {
  const [activeSection, setActiveSection] = React.useState<ActiveSection>(
    ActiveSection.favoriteSpots,
  );

  const chartConfig = {
    backgroundGradientFrom: 'transparent',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: 'transparent',
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(0, 202, 157, ${opacity})`,
    strokeWidth: 0,
    labelColor: (opacity = 1) => `rgba(0, 202, 157, ${opacity})`,
    barPercentage: 0.5,
  };

  const data = {
    labels: [],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  const sectionToRender =
    activeSection === ActiveSection.favoriteSpots
      ? props.checkedInLocations
      : props.checkedInLocations;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        style={styles.container}>
        <View style={styles.avatarContainer}>
          <Avatar
            containerStyle={{width: 100, height: 100}}
            rounded={true}
            size="xlarge"
            source={theme.images.avatar}
          />
          <View style={styles.avatarBadgeContainer}>
            <Text style={styles.avatarBadge}>27</Text>
          </View>
        </View>
        <View style={styles.userInfoContainer}>
          <Text style={styles.userName}>Emily Daniels</Text>
          <Text style={styles.smallText}>poznań, poland</Text>
          <View style={styles.chartContainer}>
            <View style={styles.checkInNumberContainer}>
              <Text style={styles.smallText}>Check-ins</Text>
              <Text style={styles.checkInsNumber}>72</Text>
            </View>
            <View style={styles.chart}>
              <LineChart
                data={data}
                width={256}
                height={156}
                verticalLabelRotation={30}
                chartConfig={chartConfig}
                bezier={true}
              />
            </View>
          </View>
        </View>
        <View style={styles.sectionButtonsContainer}>
          <SectionButton
            title="Favorite Spots"
            active={activeSection === ActiveSection.favoriteSpots}
            onPress={() => setActiveSection(ActiveSection.favoriteSpots)}
          />
          <SectionButton
            title="My Reviews"
            active={activeSection === ActiveSection.myReviews}
            onPress={() => setActiveSection(ActiveSection.myReviews)}
          />
        </View>
        <View
          style={{
            flex: 1,
            width: '100%',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}>
          {sectionToRender.map((spot, index) => (
            <Card
              key={index}
              image={spot.image}
              text={spot.text}
              rating={spot.rating}
              onPress={() => {
                navigate(AppRoute.SpotDetails, {location: spot});
              }}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
