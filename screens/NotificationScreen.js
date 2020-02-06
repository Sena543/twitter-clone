import React from 'react';
import { ScrollView, StyleSheet, Text} from 'react-native';


export default function NotificationScreen() {
  return (
    <ScrollView style={styles.container}>
     <Text>Notifications Screen</Text>
    </ScrollView>
  );
}

NotificationScreen.navigationOptions = {
  title: 'Notifications',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
