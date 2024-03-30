"use client";

import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  head: {
    flexDirection: 'column'
  },
  title: {
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '20px',
  },
  address: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: 13,
    justifyContent: 'flex-end',
    fontWeight: 'normal',
  },
  addressItem: {
    textAlign: 'right',
  }
});

const Head = () => {
  return (
    <View style={styles.head}>
        <Text style={styles.title}>御 見 積 書</Text>
        <View style={styles.address}>
          <Text style={styles.addressItem}>XXXX年XX月XX日</Text>
          <Text style={styles.addressItem}>株式会社カインズ</Text>
          <Text style={styles.addressItem}>〒367-0030 埼玉県本庄市早稲田の杜１丁目２番１号</Text>
          <Text style={styles.addressItem}>オンラインセンター　電話：0120-88-5279</Text>
        </View>
    </View>
  )
}

export default Head