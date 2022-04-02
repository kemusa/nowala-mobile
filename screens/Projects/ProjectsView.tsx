import React, { useContext, useRef } from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  Image,
} from 'react-native';
import styles from './styles';
import { spec } from './specs';
import { ProjectContext } from './ProjectContext';
import NowalaText from '../../components/atoms/text';
import PrimaryButton from '../../components/atoms/buttons/PrimaryButton';

const IntroView: React.FC = () => {
  const { goToProjectDetails, goToSignUp, goToLogin, userId, data } =
    useContext(ProjectContext);
  const { FULL_SIZE, ITEM_WIDTH } = spec;
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>
      <Animated.FlatList
        data={data}
        keyExtractor={item => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={FULL_SIZE}
        decelerationRate="fast"
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true },
        )}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * FULL_SIZE,
            index * FULL_SIZE,
            (index + 1) * FULL_SIZE,
          ];

          const translateX = scrollX.interpolate({
            inputRange,
            outputRange: [ITEM_WIDTH, 0, -ITEM_WIDTH],
          });
          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [1, 1.1, 1],
          });
          return (
            <TouchableOpacity
              style={styles.itemContainer}
              activeOpacity={0.5}
              onPress={() =>
                item.clickable ? goToProjectDetails(item) : null
              }>
              {/* Card wrapper */}
              <View
                style={[styles.cardContainer, { backgroundColor: item.color }]}>
                {item.image && (
                  <Image style={styles.image} source={{ uri: item.image }} />
                )}
                {/* If there's a a design, field render the design */}
                {item.design && item.design}
                {/* If there's a title and description dispalay description portion of card */}
                {item.title && item.description && (
                  <View style={styles.cardInfoContainer}>
                    <Animated.Text
                      style={[styles.title, { transform: [{ translateX }] }]}>
                      {item.title}
                    </Animated.Text>
                    <NowalaText.Body1
                      style={styles.description}
                      numberOfLines={item.clickable ? 3 : undefined}>
                      {item.description}
                    </NowalaText.Body1>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          );
        }}
      />
      {!userId && (
        <View style={styles.buttonContainer}>
          <PrimaryButton text={'Get started'} onPress={goToSignUp} />
        </View>
      )}
    </SafeAreaView>
  );
};

export default IntroView;
