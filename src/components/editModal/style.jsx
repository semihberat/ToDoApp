import {StyleSheet} from 'react-native';
import {colors} from '../../utils/constants';
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modalContentWrapper: {
    width: '80%',
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 4,
  },
  title: {
    color: colors.textPrimary,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  buttonWrapper: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  close: {
    width: 80,
    padding: 4,
    backgroundColor: 'rgba(0,0,0,0.3)',
    alignItems: 'center',
    borderRadius: 4,
    marginHorizontal: 5,
    marginTop: 4,
  },
  approve: {
    width: 80,
    padding: 4,
    backgroundColor: 'rgba(230,0,0,0.6)',
    alignItems: 'center',
    borderRadius: 4,
    marginHorizontal: 5,
    marginTop: 4,
  },
});

export default styles;
