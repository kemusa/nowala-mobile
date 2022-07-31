import React from 'react';
import { Image, View } from 'react-native';
import NowalaText from '../../../../../components/atoms/text';
import CardWrapper from '../../../../../components/templates/CardWrapper';
import CardLongList from '../../../../../components/templates/CardLongList';
import PeopleItem from '../../molecules/PeopleItem';
import styles from './styles';

const PeopleListView: React.FC = ({}) => {
  const iconSize = 45;
  const list = [
    <PeopleItem
      icon={
        <Image
          style={styles.iconImage}
          source={{
            uri: 'https://storage.googleapis.com/nowala-public/sl_homes/sl_1.jpg',
          }}
        />
      }
      title={'Rural home'}
      location={'Port Loko, Sierra Leone'}
      iconWidth={iconSize}
    />,
    <PeopleItem
      icon={
        <Image
          style={styles.iconImage}
          source={{
            uri: 'https://storage.googleapis.com/nowala-public/sl_homes/sl_2.jpg',
          }}
        />
      }
      title={'Rural home'}
      location={'Port Loko, Sierra Leone'}
      iconWidth={iconSize}
    />,
    <PeopleItem
      icon={
        <Image
          style={styles.iconImage}
          source={{
            uri: 'https://storage.googleapis.com/nowala-public/sl_homes/sl_3.jpg',
          }}
        />
      }
      title={'Rural home'}
      location={'Port Loko, Sierra Leone'}
      iconWidth={iconSize}
    />,
  ];
  return (
    <>
      <CardWrapper
        type={'primary'}
        title={"People you've helped"}
        cta={() => {}}
        ctaText={'See all'}>
        <CardLongList list={list} />
      </CardWrapper>
    </>
  );
};

export default PeopleListView;
