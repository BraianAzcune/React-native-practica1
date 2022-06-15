//estilos.ts
import { StyleSheet, ViewStyle } from 'react-native';

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
      return {
        ...styles0,
        container: {
          ...styles0.container,
          justifyContent: 'center',
        },
        cajaCeleste: {
          ...styles0.cajaCeleste,
          width: '100%',
        },
      };
    case 3:
      return {
        ...styles0,
        container: {
          ...styles0.container,
          justifyContent: 'center',
        },
        cajaVioleta: {
          ...styles0.cajaVioleta,
          alignSelf: 'flex-end',
        },
        cajaCeleste: {
          ...styles0.cajaCeleste,
          alignSelf: 'center',
        },
      };
    case 4:
      return {
        ...styles0,
        container: {
          ...styles0.container,
          justifyContent: 'space-between',
        },
        cajaVioleta: {
          ...styles0.cajaVioleta,
          alignSelf: 'flex-end',
        },
        cajaNaranja: {
          ...styles0.cajaNaranja,
          alignSelf: 'center',
        },
      };
    case 5:
      return {
        ...styles0,
        container: {
          ...styles0.container,
          flexDirection: 'row',
          justifyContent: 'space-around',
        },
        cajaVioleta: {
          ...styles0.cajaVioleta,
          height: '100%',
        },
        cajaNaranja: {
          ...styles0.cajaNaranja,
          height: '100%',
        },
        cajaCeleste: {
          ...styles0.cajaCeleste,
          height: '100%',
        },
      };
    case 6:
      return {
        ...styles0,
        cajaVioleta: {
          ...styles0.cajaVioleta,
          width: '100%',
          flex: 1,
        },
        cajaNaranja: {
          ...styles0.cajaNaranja,
          width: '100%',
          flex: 1,
        },
        cajaCeleste: {
          ...styles0.cajaCeleste,
          width: '100%',
          flex: 2,
        },
      };
    case 7:
      return {
        ...styles0,
        container: {
          ...styles0.container,
          alignItems: 'center',
          justifyContent: 'center',
        },
      };
    case 8:
      // no se podra hacer sin usar absolute ?
      return {
        ...styles0,
        container: {
          ...styles0.container,
          alignItems: 'center',
          justifyContent: 'center',
        },
        cajaVioleta: {
          ...styles0.cajaVioleta,
          position: 'absolute',
          top: 236,
        },
        cajaNaranja: {
          ...styles0.cajaNaranja,
          position: 'absolute',
          right: 56,
        },
        cajaCeleste: {
          ...styles0.cajaCeleste,
          position: 'absolute',
          bottom: 236,
        },
      };
    case 9:
      // no se podra hacer sin usar absolute ?
      return {
        ...styles0,
        container: {
          ...styles0.container,
          alignItems: 'center',
          justifyContent: 'center',
        },
        cajaVioleta: {
          ...styles0.cajaVioleta,
          position: 'absolute',
          top: 336,
        },
        cajaNaranja: {
          ...styles0.cajaNaranja,
          position: 'absolute',
          right: 56,
        },
        cajaCeleste: {
          ...styles0.cajaCeleste,
          position: 'absolute',
          bottom: 236,
        },
      };
    case 10:
      // no se podra hacer sin usar absolute ?
      return {
        ...styles0,
        container: {
          ...styles0.container,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        cajaNaranja: {
          ...styles0.cajaNaranja,
          top: '10%',
        },
      };

    default:
      return styles0;
  }
}
