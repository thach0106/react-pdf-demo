"use client";

import React from 'react';
import { Page, Document, StyleSheet, Font } from '@react-pdf/renderer';

import Head from './components/Head';
import EstimatesDescription from './components/EstimatesDescription';
import EstimatesTable from './components/EstimatesTable';

Font.register({
  family: "Noto Sans JP",
  fonts: [
    { src: "/noto-sans-jp-v36-latin_japanese/noto-sans-jp-v36-latin_japanese-regular.woff", fontWeight: 400 },
    { src: "/noto-sans-jp-v36-latin_japanese/noto-sans-jp-v36-latin_japanese-500.woff", fontWeight: 500 },
    { src: "/noto-sans-jp-v36-latin_japanese/noto-sans-jp-v36-latin_japanese-700.woff", fontWeight: 700 },
  ],
})

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Noto Sans JP',
    padding: '40px 20px',
    fontSize: '13px',
  }
})

const EstimatesDocument = () => {
  return (
    <Document>
      <Page size="A3" style={styles.page}>
        <Head />
        <EstimatesDescription />
        <EstimatesTable />
      </Page>
    </Document>
  )
}

export default EstimatesDocument