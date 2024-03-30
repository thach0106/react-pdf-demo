"use client";

import React from 'react';
import { Text, View } from '@react-pdf/renderer';

import { styles } from './styles';

const EstimatesDescription = () => {
  return (
    <View style={styles.estimates}>
        <Text>下記の通り御見積り申し上げます。</Text>
        <View style={styles.col}>
          <Text style={styles.textBold}>網戸張替：</Text>
          <Text style={styles.pl10}>- お手続き方法：XXXXXXX</Text>
          <Text style={styles.pl10}>- 引取場所：XXXXXXXX</Text>
          <View style={styles.totalPrice}>
            <Text style={styles.priceLeft}>見積合計金額：¥0,000,000</Text>
            <Text>(内消費税 ¥XXX,XXX )</Text>
          </View>
        </View>
        <View style={styles.col}>
          <Text style={styles.pl10}>・網戸の取外し・取付はお客様自身にてお願い致します。</Text>
          <Text style={styles.pl10}>・受付時の情報と状況が異なる場合、追加料金が発生する場合がございます。</Text>
          <Text style={styles.pl10}>・御見積有効期限は1ヵ月とさせていただいております。</Text>
          <Text style={styles.pl10}>・駐車スペースがない場合、公道には駐車致しません。</Text>
          <Text style={styles.pl10}>　有料駐車場を利用の場合、料金はお客様負担となります。</Text>
        </View>
    </View>
  )
}

export default EstimatesDescription