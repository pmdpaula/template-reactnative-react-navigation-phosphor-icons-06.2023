import { THEME } from '@styles/theme';

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND_DARK,

    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: THEME.FONTS.TITLE.TYPE.BOLD,
    fontSize: THEME.FONTS.TITLE.SIZE.LG,
    color: THEME.COLORS.WHITE,
  },
});
