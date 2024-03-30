"use client";

import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  estimates: {
    flexDirection: 'column',
    lineHeight: '2',
  },
  col: {
    flexDirection: 'column',
  },
  pl10: {
    paddingLeft: '10px',
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  header: {
    flexDirection: 'row',
    border: '2px solid #000',
    fontSize: 13,
    borderBottom: 'unset',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    border: '2px solid #000',
    fontSize: 13,
    borderBottom: 'unset',
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    border: '2px solid #000',
    fontSize: 13,
  },
  borderRight: {
    borderRight: '2px solid #000',
  },
  colNo: {
    borderRight: '2px solid #000',
    flexBasis: '7.7%',
  },
  colSize: {
    borderRight: '2px solid #000',
    flexBasis: '23%',
  },
  colColor: {
    borderRight: '2px solid #000',
    flexBasis: '30.8%',
  },
  colType: {
    borderRight: '2px solid #000',
    flexBasis: '7.7%',
  },
  colMeshType: {
    borderRight: '2px solid #000',
    flexBasis: '7.7%',
  },
  colQuantity: {
    borderRight: '2px solid #000',
    flexBasis: '7.7%',
  },
  colCost: {
    flexBasis: '15.4%',
  },
  colMerge: {
    flexBasis: '76.9%',
    borderRight: '2px solid #000',
  },
  colCostOfRow: {
    flexBasis: '15.4%',
    textAlign: 'right',
  },
  summaryCost: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    textAlign: 'right',
    gap: '50px',
  },
  summaryCostTitle: {
    width: '100px',
    textAlign: 'center',
  }
});

const DUMMY_DATA = [
  {
    sizes: '幅　XX cm　高さ　XX cm',
    type: '中棧あり（または中棧なし）・網1枚タイプ',
    color: 'ブラック',
    meshType: '20 ',
    quantity: 'XX 枚',
    cost: '¥XXX,XXXX' 
  },
  {
    sizes: '幅　XX cm　高さ　XX cm',
    type: '中棧あり（または中棧なし）・網1枚タイプ',
    color: 'ブラック',
    meshType: '20 ',
    quantity: 'XX 枚',
    cost: '¥XXX,XXXX' 
  },
  {
    sizes: '幅　XX cm　高さ　XX cm',
    type: '中棧あり（または中棧なし）・網1枚タイプ',
    color: 'ブラック',
    meshType: '20 ',
    quantity: 'XX 枚',
    cost: '¥XXX,XXXX' 
  },
  {
    sizes: '幅　XX cm　高さ　XX cm',
    type: '中棧あり（または中棧なし）・網1枚タイプ',
    color: 'ブラック',
    meshType: '20 ',
    quantity: 'XX 枚',
    cost: '¥XXX,XXXX' 
  },
  {
    sizes: '幅　XX cm　高さ　XX cm',
    type: '中棧あり（または中棧なし）・網1枚タイプ',
    color: 'ブラック',
    meshType: '20 ',
    quantity: 'XX 枚',
    cost: '¥XXX,XXXX' 
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
]

const EstimatesDetail = () => {
  return (
    <View style={styles.estimates}>
        <Text style={styles.title}>明 細 書</Text>
        <View style={styles.header}>
          <Text style={styles.colNo}>No.</Text>
          <Text style={styles.colSize}>サイズ</Text>
          <Text style={styles.colColor}>網色</Text>
          <Text style={styles.colType}>タイプ </Text>
          <Text style={styles.colMeshType}>メッシュ</Text>
          <Text style={styles.colQuantity}>枚数</Text>
          <Text style={styles.colCost}>金額（税込）</Text>
        </View>
        {DUMMY_DATA.map((item, index) => (
          <View style={styles.row} key={index}>
            <Text style={styles.colNo}>{Object.keys(item).length > 0 ? index + 1 : ''}</Text>
            <Text style={styles.colSize}>{item.sizes}</Text>
            <Text style={styles.colColor}>{item.type} </Text>
            <Text style={styles.colType}>{item.color}</Text>
            <Text style={styles.colMeshType}>{item.meshType}</Text>
            <Text style={styles.colQuantity}>{item.quantity}</Text>
            <Text style={styles.colCostOfRow}>{item.cost}</Text>
          </View>
        ))}
        <View style={styles.footer}>
          <Text style={styles.colNo}></Text>
          <Text style={styles.colMerge}>お引取り料金</Text>
          <Text style={styles.colCostOfRow}>¥XXX,XXXX</Text>
        </View>
        <View style={styles.summaryCost}>
          <Text style={styles.summaryCostTitle}>合計</Text>
          <Text>¥XXX,XXXX</Text>
        </View>
        <View style={styles.summaryCost}>
          <Text style={styles.summaryCostTitle}>（内消費税）</Text>
          <Text>¥XXX,XXXX</Text>
        </View>
    </View>
  )
}

export default EstimatesDetail