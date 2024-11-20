import React, {useState} from 'react';
import {View, Text, Switch, ScrollView} from 'react-native';
import Header from './components/Header';
import Profile from './screen/Profile';
import Susunan from './components/Susunan';

const App = () => {
  const [SwitchOn, setSwitchOn] = useState(false);
  return (
    <View style={{flex: 1, backgroundColor: SwitchOn ? 'white' : 'black'}}>
      <ScrollView>
        <Header title="Settings" headerColor="black" kepala={SwitchOn} />
        <Switch
          trackColor={{false: 'grey', true: 'grey'}}
          thumbColor={SwitchOn ? 'white' : 'white'}
          onValueChange={SwitchOn => setSwitchOn(SwitchOn)}
          value={SwitchOn}
        />
        <Profile kepala={SwitchOn} />
        <Susunan
          title="Account"
          title2="Security Notification, Change Number"
          IconName="key"
        />
        <Susunan
          title="Privacy"
          title2="Blacklisted, Temporary Message"
          IconName="lock-closed"
        />
        <Susunan
          title="Avatar"
          title2="Make, Edit Profile Picture"
          IconName="person"
        />
        <Susunan
          title="List"
          title2="Manage People And Groups"
          IconName="reader"
        />
        <Susunan
          title="Chat"
          title2="Theme, Wallpaper, History"
          IconName="chatbubbles"
        />
        <Susunan
          title="Notifications"
          title2="Message, Group, Ringtone"
          IconName="notifications"
        />
        <Susunan
          title="Storage and Data"
          title2="Network Usage, Auto Download"
          IconName="cloud"
        />
        <Susunan
          title="Language"
          title2="English ( Device Language )"
          IconName="language"
        />
        <Susunan title="Version" title2="0.0.1" IconName="information-circle" />

        <Susunan title="Help" title2="FAQ, Contact Us" IconName="help-circle" />
      </ScrollView>
    </View>
  );
};

export default App;
