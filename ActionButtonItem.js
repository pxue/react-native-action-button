import React, {
  Component,
  PropTypes,
} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  TouchableOpacity,
} from 'react-native';

export default class ActionButtonItem extends Component {

  render() {
    const offsetX = this.props.radius * Math.cos(this.props.angle);
    const offsetY = this.props.radius * Math.sin(this.props.angle);
    return (
      <Animated.View
        style={[{
            opacity: this.props.anim,
            width: this.props.size,
            height: this.props.size,
            transform: [
              {
                translateY: this.props.anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, offsetY],
                }) },
              {
                translateX: this.props.anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, offsetX],
                }) },
              {
                rotate: this.props.anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '720deg'],
                }) },
              {
                scale: this.props.anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                }) },
            ]
          }]}
      >
        <TouchableOpacity style={{flex:1}} activeOpacity={this.props.activeOpacity || 0.85} onPress={this.props.onPress}>
          <View style={[
            {
              width: this.props.size + 10,
              height: this.props.size + 10,
              borderRadius: (this.props.size + 10) / 2,
              backgroundColor: 'rgba(255,255,255,0.6)',
              alignItems: 'center',
              justifyContent: 'center',
            }
          ]}>
            <View
              style={[styles.actionButton,{
                  width: this.props.size,
                  height: this.props.size,
                  borderRadius: this.props.size / 2,
                  backgroundColor: this.props.buttonColor,
                }]}>
              {this.props.children}
            </View>
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
  }

}

ActionButtonItem.propTypes = {
  angle: PropTypes.number,
  radius: PropTypes.number,
  buttonColor: PropTypes.string,
  onPress: PropTypes.func,
  children: PropTypes.node.isRequired,
};

ActionButtonItem.defaultProps = {
  onPress: () => {},
};

const styles = StyleSheet.create({
  actionButton: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: '#444',
    shadowRadius: 1,
  },
});
