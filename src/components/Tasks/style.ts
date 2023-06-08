import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  taskItemContainer: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#262626',
    borderWidth: 1,
    borderColor: '#333333',
    padding: 12,
    borderRadius: 5,
    height: 64,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginLeft: 3,
  },
  description: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#f5f5f5',
    alignItems: 'center',
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
  descriptionTaskCompleted: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#808080',
    alignItems: 'center',
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    textDecorationLine: 'line-through',
  },
  iconItem: {},

  taskContainer: {
    paddingHorizontal: 14,
  },
})
