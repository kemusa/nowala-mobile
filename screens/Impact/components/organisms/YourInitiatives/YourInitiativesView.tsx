import React, { useContext } from 'react';
import NowalaText from '../../../../../components/atoms/text';
import styles from './styles';
import CardWrapper from '../../../../../components/templates/CardWrapper';
import CardList from '../../../../../components/templates/CardList';
import CardListItem from '../../../../../components/molecules/CardListItem';
import DirectImpactCardIcon from '../../../../../components/atoms/icons/DirectImpactCardIcon';
import ImpactTogetherIcon from '../../../../../components/atoms/icons/ImpactTogetherIcon';
import { ImpactCtx } from '../../../ImpactContext';
import { View } from 'react-native';
import InitiativesCard from '../../templates/InitiativesCard';
import ElectricityIcon from '../../../../../components/atoms/icons/ElectricityIcon';
import LinkIcon from '../../../../../components/atoms/icons/LinkIcon';

const YourInitiativesView: React.FC<YourInitiativesProps> = () => {
  const { goToProjectDetails } = useContext(ImpactCtx);
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <InitiativesCard
        title="Affordable solar power"
        icon={<ElectricityIcon />}
        backgroundUrl={
          'https://storage.googleapis.com/nowala-public/solar_homes.png'
        }
        onPress={goToProjectDetails}
      />
      <InitiativesCard
        title="Help other make impact"
        icon={<LinkIcon />}
        backgroundUrl={
          'https://storage.googleapis.com/nowala-public/hands_tree.png'
        }
        onPress={() => {}}
      />
    </View>
  );
};

export default YourInitiativesView;
