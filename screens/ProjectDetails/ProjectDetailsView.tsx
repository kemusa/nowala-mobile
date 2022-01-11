import { BlurView } from 'expo-blur';
import React, { useContext } from 'react';
import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native';
import { ProjectDetailsContext } from './ProjectDetailsContext';
import styles from './styles';

const ProjectDetailsView = () => {
  const { project, getStatIcon } = useContext(ProjectDetailsContext);

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{ uri: project.image }} />
      <View style={styles.contentContainer}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.mainInfo}>
            <BlurView style={styles.blur} intensity={50} tint="dark">
              <Text style={[styles.projectTitle, styles.text]}>
                {project.title}
              </Text>
              <Text style={[styles.detailsText, styles.text]}>
                {project.description}
              </Text>
            </BlurView>
          </View>
          <View style={styles.statsInfo}>
            {project.stats &&
              Object.keys(project.stats).map((k: any, idx: number) => (
                <View key={idx} style={styles.statContainer}>
                  <BlurView style={styles.blur} intensity={50} tint="dark">
                    {project.stats &&
                      getStatIcon(project.stats[k as keyof ProjectStats].icon)}
                    <Text style={[styles.statTitle, styles.text]}>
                      {project.stats &&
                        project.stats[k as keyof ProjectStats].title}
                    </Text>
                    <Text style={[styles.statValue, styles.text]}>
                      {project.stats &&
                        project.stats[k as keyof ProjectStats].value}
                    </Text>
                  </BlurView>
                </View>
              ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ProjectDetailsView;
