import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  estimates: {
    flexDirection: 'column',
    lineHeight: '2',
    marginBottom: '20px',
  },
  col: {
    flexDirection: 'column',
  },
  textBold: {
    fontWeight: 'bold',
  },
  pl10: {
    paddingLeft: '10px',
  },
  totalPrice: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottom: '2px solid #000',
    paddingLeft: '10px',
    alignItems: 'center',
    lineHeight: '1.5',
    marginBottom: '10px',
  },
  priceLeft: {
    fontWeight: 'bold',
    fontSize: 22,
  },
});