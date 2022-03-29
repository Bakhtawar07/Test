import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, Image } from 'react-native'

const RenderRowView = props => {
  return (
    <View style={styles.textContainer}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Image
          source={props.leftIcon}
          style={[styles.leftIconStyle, props.leftIconStyle]}
        />
        <View style={{ flexDirection: 'row' }}>
          <View style={{ justifyContent: 'center' }}>
            <Text style={styles.nameStyle}>{props.leftText}</Text>
          </View>
        </View>
      </View>
      {props.leftText && (
        <Text style={{ color: '#9fa0a5' }}>{props.rightText}</Text>
      )}
      {props.rightIcon && (
        <Image source={props.rightIcon} style={props.rightIconStyle} />
      )}
    </View>
  )
}

export default RenderRowView

const styles = StyleSheet.create({
  textContainer: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom:10
  },
  nameStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17
  },
  leftIconStyle: {
    height: 30,
    width: 30,
    marginEnd: 15,
    tintColor: 'white'
  }
})
