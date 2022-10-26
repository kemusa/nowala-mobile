import React, { useContext, useEffect, useState } from 'react';
import { PeopleFullCtx } from './PeopleFullContext';
import PeopleFullView from './PeopleFullView';
import ServicesContext, { Services } from '../../services';
import { PROJECT_ID } from '../../utils/consts/FIRST_PROJECT';
import { AuthStackScreenProps } from '../../navigation/types';
import { analyticsScreens } from '../../utils/consts/ANALYTICS';
import NowalaLogoSmall from '../../components/atoms/icons/NowalaLogoSmall';
import { SnapshotData } from '../../services/types';

interface PeopleFullProps extends AuthStackScreenProps<'PeopleHelped'> {
  user: NowalaUserProfile;
}

const PeopleFullContainer: React.FC<PeopleFullProps> = ({
  navigation,
  user,
}) => {
  const projectId = PROJECT_ID; // todo: make dynamic and environment based

  const { db, analytics } = useContext(ServicesContext) as Services;
  const [people, setPeopleList] = useState([] as PeopleList[]);

  // Place Nowala logo in header on component init
  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <NowalaLogoSmall />,
      headerTitleAlign: 'center',
      headerStyle: {
        elevation: 0, // remove header border for android
        shadowOpacity: 0, // remove header border for ios
        borderBottomWidth: 0, //remove header border for ios
      },
    });
  }, [navigation]);

  // track screen
  useEffect(() => {
    analytics.screenWithProperties(analyticsScreens.ASSET_ITEM_DETAIL, {
      project_alias: projectId,
    });
  }, []);

  // Listener for people list data
  useEffect(() => {
    const unsubscribe = db.subscribeOrderBy(
      `users/${user.userId}/people`,
      'dateAdded',
      'desc',
      handlePeopleList,
    );
    return () => {
      unsubscribe();
    };
  }, [user]);

  const handlePeopleList = (data: SnapshotData[]) => {
    if (data.length > 0) {
      try {
        setPeopleList(
          data.map(o => {
            return {
              beneficiaryOccupation: o.data.beneficiaryOccupation,
              townCity: o.data.townCity,
              country: o.data.country,
              iconUrl: o.data.iconUrl,
              numPeople: o.data.peopleHelped,
              title: o.data.title,
            };
          }),
        );
      } catch (error) {
        console.error(error);
      }
    }
  };

  const goToPeopleDetail = () => {
    navigation.navigate('AuthStack', { screen: 'AssetDetail' });
  };

  return (
    <PeopleFullCtx.Provider value={{ people, goToPeopleDetail }}>
      <PeopleFullView />
    </PeopleFullCtx.Provider>
  );
};

export default PeopleFullContainer;
