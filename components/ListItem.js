import React from 'react';

// rn components
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

// icons
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = ({item, onDelete}) => {
  return (
    <TouchableOpacity style={styles.item}>
      <View style={styles.view}>
        <Text style={styles.text}>{item.name}</Text>
        <Icon
          name="remove"
          size={20}
          color="firebrick"
          onPress={() => onDelete(item.id)}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});

export default ListItem;
