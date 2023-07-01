import { THEME } from '@styles/theme';

import { ActivityIndicator, View } from 'react-native';

import { styles } from './styles';

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={THEME.COLORS.PURPLE} />
    </View>
  );
}
