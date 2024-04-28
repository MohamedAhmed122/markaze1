import { ScaledSheet } from 'react-native-size-matters';

import { Dimensions } from 'react-native';
import { theme } from '../../theme';
const { width } = Dimensions.get('window');

export const tabStyles = ScaledSheet.create({
  container: {
    width: width - 50,
    marginLeft: '25@ms',
    marginBottom: '15@mvs',
    marginTop: '15@mvs',
    borderRadius: 15,
    height: '50@s',
    borderWidth: 2,
    borderColor: theme.colors.gray,
    shadowColor: theme.colors.quicksilver,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  tab: {
    height: '50@s',
    justifyContent: 'center',
    // width: (width - 44) / 2,
    alignItems: 'center',
    borderLeftColor: theme.colors.gray,
    borderLeftWidth: 3,
  },
  activeTab: {
    overflow: 'hidden',
    height: '50@s',
    justifyContent: 'center',
    // width: (width - 44) / 2,
    alignItems: 'center',
    borderLeftColor: theme.colors.gray,
    borderLeftWidth: 3,
    backgroundColor: theme.colors.gray,
  },

  TabLeft: {
    borderLeftWidth: 0,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },

  tabRight: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});
