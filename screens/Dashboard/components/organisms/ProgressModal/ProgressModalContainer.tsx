import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { statusText } from '../../../../../utils/consts/DATA';
import { DashboardContext } from '../../../DashboardContext';
import ProgressModalView from './ProgressModalView';

const ProgressModalContainer: React.FC = () => {
  const { dashboardSummary, viewProgress, closeProgressModal } =
    useContext(DashboardContext);
  const { progress } = dashboardSummary;
  const [progressList, setProgressList] = useState([] as any);

  const getStatusObject = (field: keyof StatusText, complete: boolean) => {
    return { title: statusText[field], complete };
  };

  // Creates progress list manually to enforce that progress items are listed in a particular order
  const createProgressList = () => {
    let progressList = [];
    progressList.push(getStatusObject('registered', progress.registered));
    progressList.push(getStatusObject('paid', progress.paid));
    progressList.push(getStatusObject('transferred', progress.transferred));
    progressList.push(getStatusObject('installed', progress.installed));
    progressList.push(
      getStatusObject('collectionStarted', progress.collectionStarted),
    );
    setProgressList(progressList);
  };

  useEffect(() => {
    console.log('PROGRESS', progress);
    if (progress) {
      createProgressList();
    }
  }, [progress]);

  return (
    <ProgressModalView
      progress={progressList}
      isOpen={viewProgress}
      onClose={closeProgressModal}
    />
  );
};

export default ProgressModalContainer;
