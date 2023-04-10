import {StyleSheet, Platform} from 'react-native';
import {COLORS} from '../../assets/theme/colors';

export const CELL_SIZE = 70;
export const CELL_BORDER_RADIUS = 8;
export const DEFAULT_CELL_BG_COLOR = COLORS.white;
export const NOT_EMPTY_CELL_BG_COLOR = COLORS.aqua_Blue;
export const ACTIVE_CELL_BG_COLOR = COLORS.whitef7;

const styles = StyleSheet.create({
  codeFieldRoot: {
    height: CELL_SIZE,
    marginTop: 25,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  cell: {
    marginHorizontal: 8,
    height: CELL_SIZE,
    width: CELL_SIZE,
    lineHeight: CELL_SIZE - 5,
    ...Platform.select({web: {lineHeight: 65}}),
    fontSize: 30,
    textAlign: 'center',
    borderRadius: CELL_BORDER_RADIUS,
    color: COLORS.aqua_Blue,
    backgroundColor: COLORS.white,

    // IOS
    shadowColor: COLORS.blackaa,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    // Android
    elevation: 3,
  },

  // =======================

  root: {
    minHeight: 800,
    padding: 20,
    backgroundColor: COLORS.white,
  },
  title: {
    paddingTop: 20,
    color: COLORS.blackaa,
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
    paddingBottom: 40,
  },
  icon: {
    width: 217 / 2.4,
    height: 158 / 2.4,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  subTitle: {
    paddingTop: 30,
    color: COLORS.blackaa,
    textAlign: 'center',
  },
  nextButton: {
    marginTop: 30,
    borderRadius: 60,
    height: 50,

    justifyContent: 'center',
    marginBottom: 100,
  },
  nextButtonText: {
    textAlign: 'center',
    fontSize: 20,
    color: COLORS.white,
    fontWeight: '700',
  },
  resendContainer: {
    flexDirection: 'row',
    marginTop: 25,
    marginHorizontal: 25,
    justifyContent: 'space-between',
  },
});

export default styles;
