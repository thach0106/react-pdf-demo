import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  estimatesTable: {
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
