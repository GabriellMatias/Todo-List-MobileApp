import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1E6F9F',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginTop: -35,
    gap: 4,
  },
  disabledButton: {
    opacity: 0.7,
    backgroundColor: 'gray',
  },
  input: {
    paddingHorizontal: 24,
    backgroundColor: '#262626',
    flex: 1,
    borderRadius: 5,
    color: '#f5f5f5',
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 24,
    gap: 10,
  },
  labelItem: {
    color: '#4EA8DE',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 17,
  },
  counterItem: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: '#333333',
    borderRadius: 99,
    color: '#fff',
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  listEmptyText: {
    fontWeight: '700',
    color: '#808080',
  },
  listEmptyTextItem: {
    color: '#808080',
  },
  mainContainer: {
    flexDirection: 'column',
  },
  mainContainerWithoutTasks: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
  },
})
