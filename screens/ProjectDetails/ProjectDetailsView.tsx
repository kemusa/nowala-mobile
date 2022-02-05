import { BlurView } from 'expo-blur';
import React, { useContext } from 'react';
import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native';
import { ProjectDetailsContext } from './ProjectDetailsContext';
import NowalaText from '../../components/atoms/text';
import styles from './styles';

const ProjectDetailsView = () => {
  const { project, getStatIcon } = useContext(ProjectDetailsContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backgroundContainer}>
        <Image style={styles.image} source={{ uri: project.image }} />
        <View style={styles.titleContaier}>
          <NowalaText.Headline1 style={styles.projectTitle}>
            {project.title}
          </NowalaText.Headline1>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.mainInfo}>
            <NowalaText.Body1 style={styles.detailsText}>
              {project.description}
            </NowalaText.Body1>
          </View>
          <View style={styles.statsInfo}>
            {project.stats &&
              Object.keys(project.stats).map((k: any, idx: number) => (
                <View key={idx} style={styles.statContainer}>
                  <View style={styles.statRow1}>
                    {project.stats &&
                      getStatIcon(project.stats[k as keyof ProjectStats].icon)}
                    <Text style={styles.statTitle}>
                      {project.stats &&
                        project.stats[k as keyof ProjectStats].title}
                    </Text>
                  </View>
                  <Text style={styles.statValue}>
                    {project.stats &&
                      project.stats[k as keyof ProjectStats].value}
                  </Text>
                </View>
              ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ProjectDetailsView;
