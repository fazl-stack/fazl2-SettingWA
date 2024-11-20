import React, {useState} from 'react';
import {Text, View, Switch, Alert, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// syarat buat props
//1. buat variable di field parameter function component dalamnya
//2. panggil variablenya di bagian komponent custom

const Header = ({title = 'Header', headerColor = 'white', kepala}) => {
  const BackButton = () => {
    return Alert.alert('Logout', 'Are you sure?', [
      {text: 'No'},
      {text: 'Yes'},
    ]);
  };

  return (
    <View
      style={{
        height: 60,
        width: '100%',
        backgroundColor: kepala ? 'white' : headerColor,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
      }}>
      <View style={{flexDirection: 'row', padding: 5}}>
        <TouchableOpacity style={{marginTop: 5}}>
          <Icon
            name="arrow-back-outline"
            size={30}
            color={kepala ? 'black' : 'white'}
            onPress={BackButton}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 30,
            color: kepala ? 'black' : 'white',
            marginHorizontal: 15,
          }}>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default Header;
