import React, {useState} from 'react';

// rn components
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

// icons
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({onAdd}) => {
  const [name, setName] = useState('');

  const onChangeName = value => setName(value);

  const handleAddItem = () => {
    onAdd(name);
    setName('');
  };

  return (
    <View>
      <TextInput
        onChangeText={onChangeName}
        placeholder="Add item..."
        style={styles.input}
        value={name}
      />
      <TouchableOpacity
        disabled={!name}
        style={styles.btn}
        onPress={handleAddItem}>
        <Icon style={styles.plusIcon} name="plus" size={20} />
        <Text style={styles.btnText}>Add item</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddItem;

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
  },
  btnText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'darkslateblue',
  },
  plusIcon: {
    marginRight: 10,
    color: 'darkslateblue',
  },
});
