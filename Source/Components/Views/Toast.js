import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {ToastActions} from '../../Redux/Actions/ToastActions';

const Toast = () => {
  const {message, toastState, errorState} = useSelector(state => state.toast);
  const dispatch = useDispatch();

  if (toastState) {
    setTimeout(() => {
      dispatch({
        type: ToastActions.CLEAR,
      });
    }, 3000);
  }

  const hideToast = () => {
    dispatch({
      type: ToastActions.CLEAR,
    });
  };

  return (
    <React.Fragment>
      {toastState && (
        <View style={[styles.error, !errorState && styles.noError]}>
          <Text style={styles.whiteLabel}>{message}</Text>
          <Pressable onPress={hideToast}>
            <Text style={styles.whiteLabelCross}>X</Text>
          </Pressable>
        </View>
      )}
    </React.Fragment>
  );
};

export default Toast;

const styles = StyleSheet.create({
  error: {
    backgroundColor: 'red',
    padding: 10,
    margin: 20,
    position: 'absolute',
    top: 48,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  noError: {
    backgroundColor: 'green',
  },
  whiteLabel: {
    color: 'white',
  },
  whiteLabelCross: {
    color: 'white',
  },
});
