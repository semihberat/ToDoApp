import {StyleSheet} from 'react-native';
import {colors} from '../../utils/constants';

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'row',
    aligntItems: 'center',
  },
  input: {
    borderColor: colors.textPrimary,
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 4,
    color: colors.textPrimary,
    fontSize: 16,
    flex: 1,
  },
  icon: {fontSize: 30, color: colors.bgPrimary, margin: 10},
});

export default styles;
