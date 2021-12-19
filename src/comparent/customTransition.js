import React from 'react';
import {
  Easing,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
const TransitionSpecs = {
    gestureEnabled: true,
    gestureDirection: 'horizontal',
   
    cardStyleInterpolator: ({ current, next, layouts }) => {
      return {
        cardStyle: {
          transform: [
            {
              translateX: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.width, 0],
              })
            },
            {
              rotate: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: ["180deg", "0deg"],
              }),
            },
            {
              scale: next ?
                next.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.7],
                }) : 1,
            }
          ]
        },
        opacity: current.opacity,
      }
    }
  }
  export default customTransition