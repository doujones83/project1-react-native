import React, {FC, useState} from 'react';
import {StyleSheet, Text, SafeAreaView, Button} from 'react-native';

const Modal = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Button title="Hello" onPress={() => setOpenModal(true)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
