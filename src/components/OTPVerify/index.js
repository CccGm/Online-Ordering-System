import React, {useEffect, useState} from 'react';
import {
  Alert,
  Animated,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {useNavigation} from '@react-navigation/native';
import styles, {
  ACTIVE_CELL_BG_COLOR,
  CELL_BORDER_RADIUS,
  CELL_SIZE,
  DEFAULT_CELL_BG_COLOR,
  NOT_EMPTY_CELL_BG_COLOR,
} from './styles';
import {LOGIN} from '../../constants/routeName';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {Register_Otp, Resend_Otp} from '../../redux/action/Actions';
import {
  TEXT_ALERT,
  TEXT_CODE_NOT_RECIVED,
  TEXT_PLEASE_INSERT_ALL_VALUE,
  TEXT_RESEND_OTP,
  TEXT_TIME_REMAINING,
  TEXT_VERIFICATION,
  TEXT_VERIFY,
} from '../../constants/strings';

const {Value, Text: AnimatedText} = Animated;

const CELL_COUNT = 4;
const source = {
  uri: 'https://user-images.githubusercontent.com/4661784/56352614-4631a680-61d8-11e9-880d-86ecb053413d.png',
};

const animationsColor = [...new Array(CELL_COUNT)].map(() => new Value(0));
const animationsScale = [...new Array(CELL_COUNT)].map(() => new Value(1));
const animateCell = ({hasValue, index, isFocused}) => {
  Animated.parallel([
    Animated.timing(animationsColor[index], {
      useNativeDriver: false,
      toValue: isFocused ? 1 : 0,
      duration: 250,
    }),
    Animated.spring(animationsScale[index], {
      useNativeDriver: false,
      toValue: hasValue ? 0 : 1,
      duration: hasValue ? 300 : 250,
    }),
  ]).start();
};

const OTPVerify = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [value, setValue] = useState('');
  const [minutes, setMinutes] = useState(1);
  const registerData = useSelector(state => state.RegisterReducer);
  const otpData = useSelector(state => state.OTPReducer);
  const [seconds, setSeconds] = useState(30);
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  useEffect(() => {
    if (otpData.loading == false) {
      if (otpData.data.status == 1) {
        navigation.navigate(LOGIN);
      }
    }
  }, [otpData]);

  const VerifyOtp = () => {
    if (value.length == 4) {
      let data = {
        userId: registerData.data.data._id,
        otp: value,
      };
      dispatch(Register_Otp(data));
    } else {
      Alert.alert(TEXT_ALERT, TEXT_PLEASE_INSERT_ALL_VALUE);
    }
  };

  const resendOTP = () => {
    setMinutes(1);
    setSeconds(30);

    dispatch(Resend_Otp({userId: registerData.data.data._id}));
  };

  const renderCell = ({index, symbol, isFocused}) => {
    const hasValue = Boolean(symbol);
    const animatedCellStyle = {
      backgroundColor: hasValue
        ? animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [NOT_EMPTY_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
          })
        : animationsColor[index].interpolate({
            inputRange: [0, 1],
            outputRange: [DEFAULT_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
          }),
      borderRadius: animationsScale[index].interpolate({
        inputRange: [0, 1],
        outputRange: [CELL_SIZE, CELL_BORDER_RADIUS],
      }),
      transform: [
        {
          scale: animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [0.2, 1],
          }),
        },
      ],
    };

    setTimeout(() => {
      animateCell({hasValue, index, isFocused});
    }, 0);

    return (
      <AnimatedText
        key={index}
        style={[styles.cell, animatedCellStyle]}
        onLayout={getCellOnLayoutHandler(index)}>
        {symbol || (isFocused ? <Cursor /> : null)}
      </AnimatedText>
    );
  };

  return (
    <SafeAreaView style={styles.root}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name={'arrow-back'} size={25} color={'#000000aa'} />
      </TouchableOpacity>
      <Text style={styles.title}>{TEXT_VERIFICATION}</Text>
      <Image style={styles.icon} source={source} />
      <Text style={styles.subTitle}>
        Please enter the verification code{'\n'}
        we send to your email address
      </Text>

      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={renderCell}
      />
      <View style={styles.resendContainer}>
        {seconds > 0 || minutes > 0 ? (
          <Text style={{fontSize: 16}}>
            {TEXT_TIME_REMAINING} : 0{minutes < 10 ? minutes : minutes} :{' '}
            {seconds < 10 ? '0' + seconds : seconds}
          </Text>
        ) : (
          <Text style={{fontSize: 16}}>{TEXT_CODE_NOT_RECIVED}</Text>
        )}
        <TouchableOpacity
          disabled={seconds > 0 || minutes > 0}
          onPress={() => resendOTP()}>
          <Text
            style={{
              fontSize: 16,
              color: seconds > 0 || minutes > 0 ? '#cdd2d8' : '#009387',
            }}>
            {TEXT_RESEND_OTP}
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          VerifyOtp();
        }}>
        <LinearGradient
          colors={['#08d4c4', '#01ab9d']}
          style={styles.nextButton}>
          <Text style={styles.nextButtonText}>{TEXT_VERIFY}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OTPVerify;
