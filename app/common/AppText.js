import React, {useMemo} from 'react';
import {Text as NativeText} from 'react-native';
import colors from '../assets/styles/colors';

const AppText = props => {
  const {children, style, ...rest} = props;

  return useMemo(() => {
    return (
      <NativeText
        {...rest}
        style={[style, {fontFamily: 'Tajawal-Medium', color: colors.black}]}>
        {children ?? 'lll'}
      </NativeText>
    );
  }, [rest, style, children]);
};

AppText.defaultProps = {};
export default AppText;
