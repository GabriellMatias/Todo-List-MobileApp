import { View, Image } from 'react-native'
import { styles } from './style'
const Logo = require('../../../assets/Logo.png')

export function Header() {
  return (
    <View style={styles.headerContainer}>
      <Image source={Logo} alt="Logo" />
    </View>
  )
}
