import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const IMG_API_URL = 'https://randomuser.me/api/portraits/men/75.jpg';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  text: {
    color: 'darkslateblue',
    fontSize: 30,
  },
  userImg: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello world</Text>
      <Image source={{uri: IMG_API_URL}} style={styles.userImg} />
    </View>
  );
};

export default App;
