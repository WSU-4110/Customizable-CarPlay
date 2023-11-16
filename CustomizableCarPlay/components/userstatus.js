import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const StatusUpdate = ({ onUpdateStatus }) => {
  const [selectedStatus, setSelectedStatus] = useState('');

  const handleStatusUpdate = (status) => {
    setSelectedStatus(status);
    onUpdateStatus(status);
  };

  return (
    <View style={styles.container}>
      <Text>Update Status:</Text>
      <TouchableOpacity onPress={() => handleStatusUpdate('Safe')}>
        <View style={selectedStatus === 'Safe' ? styles.selected : styles.option}>
          <Text>Safe</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleStatusUpdate('Assistance')}>
        <View style={selectedStatus === 'Assistance' ? styles.selected : styles.option}>
          <Text>Assistance</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleStatusUpdate('Danger')}>
        <View style={selectedStatus === 'Danger' ? styles.selected : styles.option}>
          <Text>Danger</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  option: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  selected: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 5,
  },
});

export default StatusUpdate;
