import React, {useState} from 'react';

// rn components
import {StyleSheet, View, FlatList} from 'react-native';

// local components
import Header from './Header';
import ListItem from './ListItem';

// local utils
import {generateItem} from '../utils/generateItem';
import AddItem from './AddItem';

const App = () => {
  const [items, setItems] = useState([]);

  const deleteItem = id => {
    setItems(prev => {
      return prev.filter(item => item.id !== id);
    });
  };

  const addItem = name => {
    setItems(prev => {
      return [generateItem(name), ...prev];
    });
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem onAdd={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} onDelete={deleteItem} onAdd={addItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
