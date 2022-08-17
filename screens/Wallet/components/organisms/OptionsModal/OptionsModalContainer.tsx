import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { WalletCtx } from '../../../WalletContext';
import OptionsModalView from './OptionsModalView';

const OptionsModalContainer: React.FC = () => {
  // const { viewOptions, closeOptionsModal, goToProject, goToYourOrders } =
  //   useContext WalletCtx);
  return (
    <></>
    // <OptionsModalView
    //   isOpen={viewOptions}
    //   onClose={closeOptionsModal}
    //   goToProject={goToProject}
    //   openOrdersModal={goToYourOrders}
    // />
  );
};

export default OptionsModalContainer;
