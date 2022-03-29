import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableWithoutFeedback,
  Alert,
  StyleSheet,
  Image,
  Dimensions
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {
  SECTOR_LABS_ICON,
  PULL_ICON,
  MORE_H,
  MORE_V,
  SMILE_ICON,
  AVATAR_ICON,
  COMMIT_ICON,
  VIEW_ICON,
  CIRCLE,
  DOWN_ARROW,
  COMMENT_ICON,
  INFO_ICON
} from '../../assets/images/index'
import RenderRowView from '../../components/RenderRowView'

const Home = ({ navigation }) => {
  const { width } = Dimensions.get('window')

  function renderSeperator() {
    return (
      <View
        style={{
          backgroundColor: '#050505',
          height: 20,
          width: width,
          marginLeft: -15
        }}></View>
    )
  }

  function renderGrayLine() {
    return <View style={{ backgroundColor: '#373a41', height: 1 }}></View>
  }
  return (
    <>
      <SafeAreaView style={styles.SafeAreaView2}>
        <View style={styles.container}>
          <View style={styles.topBar}>
            <View>
              <Icon name={'arrow-back'} size={30} color={'white'} />
            </View>
            <View style={styles.iconView}>
              <Icon name={'share-social-outline'} size={30} color={'#4888e3'} />
              <Image
                source={MORE_V}
                style={{
                  height: 28,
                  width: 25,
                  tintColor: '#4888e3',
                  marginStart: 20
                }}
              />
            </View>
          </View>
          <View style={styles.titleStyle}>
            <Image
              source={SECTOR_LABS_ICON}
              style={{ height: 25, width: 25 }}
            />
            <Text style={{ color: '#9fa0a5', fontSize: 18, marginStart: 17 }}>
              Sector Labs / Jarvis-app #74
            </Text>
          </View>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 27,
              paddingTop: 20
            }}>
            initial work learning about jarvis code base
          </Text>
          <View style={styles.rowView}>
            <View style={styles.subView}>
              <Image
                source={PULL_ICON}
                style={{ height: 20, width: 20, tintColor: '#94d4a8' }}
              />
              <Text style={{ color: '#94d4a8', marginStart: 5 }}>Open</Text>
            </View>
            <View style={styles.subView2}>
              <Text
                style={{ color: '#8fb2ea', marginStart: 5, letterSpacing: 2 }}>
                initialWork
              </Text>
            </View>
            <View style={{ justifyContent: 'center' }}>
              <Icon name={'arrow-forward'} size={20} color={'#6f6f79'} />
            </View>
            <View style={styles.subView2}>
              <Text
                style={{ color: '#8fb2ea', marginStart: 5, letterSpacing: 2 }}>
                develop
              </Text>
            </View>
          </View>
          {renderGrayLine()}
          <View style={styles.userContainer}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: 10
              }}>
              <Image
                source={AVATAR_ICON}
                style={{ height: 40, width: 40, marginEnd: 15 }}
              />
              <View style={{ flexDirection: 'row' }}>
                <View style={{ justifyContent: 'center' }}>
                  <Text style={styles.nameStyle}>ali-hasnain9</Text>
                  <Text style={styles.grayText}>21d</Text>
                </View>
              </View>
            </View>
            <Image
              source={MORE_H}
              style={{ height: 20, width: 20, tintColor: '#9fa0a5' }}
            />
          </View>
          <Text
            style={[
              styles.grayText,
              { paddingTop: 10, fontSize: 18, fontStyle: 'italic',  }
            ]}>
            No description provided.
          </Text>
          <View style={{ paddingTop: 15, paddingBottom: 8 }}>
            <View style={styles.circle}>
              <Image
                source={SMILE_ICON}
                style={{ height: 30, width: 30, tintColor: 'white' }}
              />
            </View>
          </View>
          {renderGrayLine()}
          <View style={styles.userContainer}>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Image
                source={AVATAR_ICON}
                style={{ height: 40, width: 40, marginEnd: 15 }}
              />
              <View style={{ flexDirection: 'row' }}>
                <View style={{ justifyContent: 'center' }}>
                  <Text style={styles.nameStyle}>44 file changes</Text>
                  <Text style={styles.blueText}>Review changes</Text>
                </View>
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: '#418952', fontSize: 15 }}>+25,246</Text>
              <Text style={{ color: 'red', fontSize: 14 }}>-1,056</Text>
            </View>
          </View>
          {renderGrayLine()}

          <RenderRowView
            leftIcon={COMMIT_ICON}
            leftText={'1 commit'}
            rightText={'21d ago'}
          />
          {renderSeperator()}
          <RenderRowView
            leftIcon={CIRCLE}
            leftIconStyle={{ height: 20, width: 20, tintColor: '#454451' }}
            leftText={'Reviews'}
            rightIcon={DOWN_ARROW}
            rightIconStyle={{ height: 20, width: 20, tintColor: '#8e8f94' }}
          />
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 20,
              justifyContent: 'center'
            }}>
            <Image
              source={CIRCLE}
              style={{ height: 20, width: 20, tintColor: '#454451' }}
            />
            <View style={{ marginHorizontal: 15, paddingBottom: 16 }}>
              <Text
                style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>
                Branch has merge conflicts
              </Text>
              <Text style={{ color: '#a7a8ad', fontSize: 17 }}>
                Merge cannot be cleanly created. This branch has some conflicts
                that must be resolved.
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#050505',
              width: width,
              marginLeft: -15,
              height: 150,
              paddingVertical: 20
            }}>
            <View
              style={{
                flexDirection: 'row'
              }}>
              <Image
                source={COMMIT_ICON}
                style={{
                  height: 30,
                  width: 30,
                  marginEnd: 15,
                  tintColor: 'white',
                  marginLeft: 14
                }}
              />
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={AVATAR_ICON}
                  style={{
                    height: 30,
                    width: 30,
                    marginEnd: 15,
                    tintColor: 'white'
                  }}
                />
                <Text style={styles.grayText}>
                  Initial work learning about jarvis code
                </Text>
              </View>
            </View>

            <View style={{ paddingTop: 20 }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center'
                }}>
                <Image
                  source={VIEW_ICON}
                  style={{
                    height: 25,
                    width: 25,
                    tintColor: 'white',
                    marginLeft: 15
                  }}
                />
                <View style={{ flexDirection: 'row', marginStart: 25 }}>
                  <Text style={{ color: 'white', fontWeight: 'bold' }}>
                    ali-hasnain9
                  </Text>
                  <Text style={{ color: 'white', marginLeft: 7 }}>
                    requested PR for code review all files
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: '#373a41',
                    borderRadius: 13,
                    flexDirection: 'row',
                    alignItems: 'center',
                    position: 'absolute',
                    left: 210
                  }}>
                  <Image
                    source={COMMENT_ICON}
                    style={{
                      height: 17,
                      width: 17,
                      margin: 15,
                      tintColor: 'white'
                    }}
                  />
                  <Text style={{ color: 'white', marginEnd: 10 }}>COMMENT</Text>
                </View>
                <View
                  style={{
                    backgroundColor: '#373a41',
                    borderRadius: 13,
                    flexDirection: 'row',
                    alignItems: 'center',
                    position: 'absolute',
                    right: 20
                  }}>
                  <Image
                    source={INFO_ICON}
                    style={{
                      height: 20,
                      width: 20,
                      margin: 15,
                      tintColor: 'white'
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}
export default Home

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 10,
    paddingHorizontal: 15,
    backgroundColor: '#17181c'
  },
  SafeAreaView2: { flex: 1 },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonStyle: {
    backgroundColor: '#EEE',
    paddingHorizontal: 40,
    paddingVertical: 30,
    borderWidth: 0.5,
    borderColor: '#F0F0F0',
    borderRadius: 10
  },
  titleStyle: { flexDirection: 'row', paddingTop: 30 },
  iconView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: { fontSize: 18, color: '#808080', fontWeight: 'bold' },
  subView: {
    flexDirection: 'row',
    backgroundColor: '#1f3529',
    alignSelf: 'flex-start',
    padding: 5,
    borderRadius: 5,
    alignItems: 'center'
  },
  subView2: {
    backgroundColor: '#1b2a3d',
    padding: 5,
    borderRadius: 5,
    alignItems: 'center'
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 70,
    paddingTop: 20,
    paddingBottom: 20
  },
  userContainer: {
    paddingTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom:15
  },
  grayText: {
    color: '#9fa0a5'
  },
  nameStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17
  },
  circle: {
    height: 44,
    width: 44,
    backgroundColor: '#2c2d32',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center'
  },
  blueText: {
    color: '#4a87cd',
    fontSize: 18
  },
  textContainer: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})
