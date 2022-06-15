import { StyleSheet } from 'react-native';

const mixStyle = StyleSheet.create({
  caja: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
  },
});

const styles0 = StyleSheet.create({
  container: {
    backgroundColor: '#28425b',
    color: '#fff',
    flex: 1,
  },
  cajaVioleta: {
    ...mixStyle.caja,
    backgroundColor: '#7b1fa2',
  },
  cajaNaranja: {
    ...mixStyle.caja,
    backgroundColor: '#f2a627',
  },
  cajaCeleste: {
    ...mixStyle.caja,
    backgroundColor: '#79eaff',
  },
});

const styles2 = StyleSheet.create({
  container: {
    backgroundColor: '#28425b',
    color: '#fff',
    justifyContent: 'center',
    flex: 1,
  },
  cajaVioleta: {
    ...mixStyle.caja,
    backgroundColor: '#7b1fa2',
  },
  cajaNaranja: {
    ...mixStyle.caja,
    backgroundColor: '#f2a627',
  },
  cajaCeleste: {
    ...mixStyle.caja,
    backgroundColor: '#79eaff',
    width: '100%',
  },
});

const styles3 = StyleSheet.create({
  container: {
    backgroundColor: '#28425b',
    color: '#fff',
    justifyContent: 'center',
    flex: 1,
  },
  cajaVioleta: {
    ...mixStyle.caja,
    backgroundColor: '#7b1fa2',
    alignSelf: 'flex-end',
  },
  cajaNaranja: {
    ...mixStyle.caja,
    backgroundColor: '#f2a627',
  },
  cajaCeleste: {
    ...mixStyle.caja,
    backgroundColor: '#79eaff',
    alignSelf: 'center',
  },
});

export function getStyle(index: number) {
  switch (index) {
    case 0:
      return styles0;
    case 1:
      return {
        ...styles0,
        cajaNaranja: {
          ...styles0.cajaNaranja,
          flex: 1,
        },
      };
    case 2:
      return styles2;
    case 3:
      return styles3;
    default:
      return styles0;
  }
}
