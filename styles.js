import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#21243d',
    fontWeight: 'bold',
    fontSize: 40,
    marginBottom: 20,
  },
  urlInput: {
    height: 50,
    width: '80%',
    borderColor: '#21243d',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#fafafa',
    marginBottom: 20,
    fontSize: 20,
  },
  shortBtn: {
    backgroundColor: '#ff7c7c',
    borderRadius: 20,
    height: 40,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  finalUrl: {
    height: 40,
    width: '80%',
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
  }
})