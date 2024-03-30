"use client";

import React from 'react';
import { Text, View } from '@react-pdf/renderer';

import { styles } from './styles';

const Head = () => {
  return (
    <View style={styles.head}>
        <Text style={styles.title}>御 見 積 書</Text>
        <View style={styles.information}>
          <Text style={styles.alignRight}>XXXX年XX月XX日</Text>
          <Text style={styles.alignRight}>株式会社カインズ</Text>
          <Text style={styles.alignRight}>〒367-0030 埼玉県本庄市早稲田の杜１丁目２番１号</Text>
          <Text style={styles.alignRight}>オンラインセンター　電話：0120-88-5279</Text>
        </View>
    </View>
  )
}

export default Head