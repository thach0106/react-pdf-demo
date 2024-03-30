"use client";

import React from 'react';
import { Text, View } from '@react-pdf/renderer';

import { styles } from './styles';

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

const EstimatesTable = () => {
  return (
    <View style={styles.estimatesTable}>
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

export default EstimatesTable