import {Text, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Card from '../HOC/Card';
import Button from '../HOC/Button';
import {useTheme} from '../../Hooks/useTheme';

const CartDiscount = ({
  placeholder,
  boldTextLabel,
  textLabel,
  handleDiscount,
  discountActive,
}) => {
  const [redeemCode, setRedeemCode] = useState('');
  const darkMode = useTheme();

  const handleSubmit = () => {
    if (redeemCode === '10OFF') {
      handleDiscount(true);
    } else {
      handleDiscount(false);
    }
  };

  return (
    <Card>
      {!discountActive && (
        <React.Fragment>
          <Text style={[styles.generalText, darkMode ? styles.darkText : null]}>
            <Text style={[styles.boldText, darkMode ? styles.darkText : null]}>
              {boldTextLabel}
            </Text>
            {textLabel}
          </Text>
          <TextInput
            value={redeemCode}
            style={styles.textInput}
            placeholder={placeholder}
            onChangeText={text => setRedeemCode(text)}
          />
          <Button label="Apply" onPress={handleSubmit} />
        </React.Fragment>
      )}
      {discountActive && (
        <Text style={styles.generalText}>Discount Applied: 10%</Text>
      )}
    </Card>
  );
};

export default CartDiscount;

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 5,
    backgroundColor: '#fff',
    marginVertical: 5,
    padding: 10,
  },
  generalText: {
    color: '#FFCBCB',
  },
  darkText: {
    color: 'white',
  },
  boldText: {
    fontWeight: 'bold',
    color: '#ffcbcb',
  },
});
