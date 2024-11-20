import React from 'react';
import {Text, View, Button, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Susunan = ({
  title = 'editable',
  title2 = 'mini editable',
  textColor = 'grey',
  fontsz = 25,
  weight = 'bold',
  IconName = 'add-circle-outline',
}) => {
  return (
    <View>
      <TouchableOpacity>
        <View
          style={{
            width: '100%',
            height: 100,
            alignItems: 'center',
            padding: 5,
            flexDirection: 'row',
          }}>
          <Icon name={IconName} size={30} color={textColor} />
          <View style={{flexDirection: 'column', padding: 25}}>
            <Text
              style={{fontSize: fontsz, fontWeight: weight, color: textColor}}>
              {title}
            </Text>
            <Text style={{color: textColor}}>{title2}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Susunan;
