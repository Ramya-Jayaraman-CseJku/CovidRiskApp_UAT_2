import React from 'react';
import {View, Text} from 'react-native';

import {RNCarousel} from 'react-native-carousel-cards';
export default function RNCarousalCard({todos}) {
  return (
    <View style={{flex: 1}}>
      <View style={{padding: 20}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          React Native Carousel
        </Text>
      </View>
      <RNCarousel
        data={[
          <>
            <Text>Hi</Text>
            <Text>Hello</Text>
            <Text>Hi</Text>
            <Text>Hello</Text>
          </>,
        ]}
        showIndicator={true}
        indicatorBorderColor={'black'}
        indicatorActiveBackgroundColor={'black'}
        showsHorizontalScrollIndicator={true}
      />
    </View>
  );
}
