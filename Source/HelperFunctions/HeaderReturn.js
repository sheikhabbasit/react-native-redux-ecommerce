import React from 'react';
import Header from '../Components/Typography/Header';

export const headerReturn = (iconName, onPress, name, darkMode) => {
  const headerStyles = {
    headerTintColor: darkMode ? 'white' : '#eda6c2',
    headerStyle: {
      backgroundColor: darkMode ? '#1B1A17' : '#9C0F48',
    },
    headerTitleStyle: {
      fontWeight: '700',
    },
  };
  return {
    ...headerStyles,
    headerLeft: props => (
      <Header
        iconName={iconName}
        size={30}
        theme={darkMode ? 'white' : '#eda6c2'}
        onPress={onPress}
        name={name}
        variant={'Bold'}
      />
    ),
    title: '',
  };
};
