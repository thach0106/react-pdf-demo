import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  head: {
    flexDirection: 'column'
  },
  title: {
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '20px',
  },
  information: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: 13,
    justifyContent: 'flex-end',
    fontWeight: 'normal',
  },
  alignRight: {
    textAlign: 'right',
  }
});
