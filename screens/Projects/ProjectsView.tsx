import React, { useContext, useRef } from 'react';
import { View, SafeAreaView, TouchableOpacity, Animated } from 'react-native';
import styles from './styles';
import { spec } from './specs';
import { ProjectContext } from './ProjectContext';
import NowalaText from '../../components/atoms/text';
import { BlurView } from 'expo-blur';
import PrimaryButton from '../../components/atoms/buttons/PrimaryButton';

const ProjectsView: React.FC = () => {
  const { goToProjectDetails, goToSignUp, data } = useContext(ProjectContext);
  const { FULL_SIZE, ITEM_WIDTH } = spec;
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <NowalaText.Headline1>Projects</NowalaText.Headline1>
        <NowalaText.LinkText style={{ padding: 10 }} onPress={goToSignUp}>
          Sign up
        </NowalaText.LinkText>
      </View>
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
              <View
                style={[
                  styles.contentContainer,
                  { backgroundColor: item.color },
                ]}>
                {item.image && (
                  <Animated.Image
                    style={[styles.image, { transform: [{ scale }] }]}
                    source={{ uri: item.image }}
                  />
                )}
                {item.design && item.design}
                {item.title && item.description && (
                  <BlurView style={styles.blur} intensity={40} tint="dark">
                    <View style={styles.infoContainer}>
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
                  </BlurView>
                )}
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <View style={styles.buttonContainer}>
        <PrimaryButton text={'Get started'} onPress={goToSignUp} />
      </View>
    </SafeAreaView>
  );
};

export default ProjectsView;
