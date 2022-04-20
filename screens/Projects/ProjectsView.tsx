import React, { useContext, useRef } from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import styles from './styles';
import { spec } from './specs';
import { ProjectContext } from './ProjectContext';
import NowalaText from '../../components/atoms/text';
import PrimaryButton from '../../components/atoms/buttons/PrimaryButton';
import Ionicons from '@expo/vector-icons/Ionicons';

const IntroView: React.FC = () => {
  const { goToProjectDetails, goToSignUp, goToLogin, userId, data } =
    useContext(ProjectContext);
  const { FULL_SIZE, ITEM_WIDTH } = spec;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {data.map((item, idx) => (
          <TouchableOpacity
            key={idx}
            style={styles.itemContainer}
            activeOpacity={0.5}
            onPress={() => (item.clickable ? goToProjectDetails(item) : null)}>
            {/* Card wrapper */}
            <View
              style={[styles.cardContainer, { backgroundColor: item.color }]}>
              {/* {item.clickable && (
                <View
                  style={{
                    width: '100%',
                    height: 20,
                    // position: 'absolute',
                    // top: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  }}>
                  <NowalaText.LinkText2
                    style={{ textAlign: 'left' }}
                    onPress={() => goToProjectDetails(item)}>
                    See more...
                  </NowalaText.LinkText2>
                </View>
              )} */}
              {item.image && (
                <Image style={styles.image} source={{ uri: item.image }} />
              )}
              {item.clickable && (
                <View style={{ position: 'absolute', top: 20, right: 20 }}>
                  {/* todo: refactor or remove this component */}
                  <View
                    style={{
                      height: 50,
                      width: 50,
                      borderRadius: 50,
                      backgroundColor: 'rgba(0, 0, 0, 0.15)',
                    }}>
                    <Ionicons
                      name="chevron-forward"
                      size={36}
                      color={'rgba(255, 255, 255, 0.6)'}
                      style={{ position: 'absolute', left: 7, top: 7 }}
                    />
                  </View>
                </View>
              )}
              {/* If there's a a design field, render the design */}
              {item.design && item.design}
              {/* If there's a title and description dispalay description portion of card */}
              {item.title && item.description && (
                <View style={styles.cardInfoContainer}>
                  <NowalaText.Headline3Light style={styles.title}>
                    {item.title}
                  </NowalaText.Headline3Light>
                  <NowalaText.Body1
                    style={styles.description}
                    numberOfLines={item.clickable ? 3 : undefined}>
                    {item.description}
                  </NowalaText.Body1>
                </View>
              )}
            </View>
          </TouchableOpacity>
        ))}
        <View style={styles.spacer}></View>
      </ScrollView>
      {!userId && (
        <View style={styles.buttonContainer}>
          <PrimaryButton text={'Get started'} onPress={goToSignUp} />
        </View>
      )}
    </SafeAreaView>
  );
};

export default IntroView;
