'use strict';

var React = require('react-native');
var upperFirst = require('lodash/upperFirst');

var GoddessScene = require('../components_scene/GoddessScene.js');
var BlogScene = require('../components_scene/BlogScene.js');
var NewsScene = require('../components_scene/NewsScene.js');
var TagsScene = require('../components_scene/TagsScene.js');
var SettingScene = require('../components_scene/SettingScene.js');

var {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight,
} = React;

var { Dimensions } = React;
var SCREEN_WIDTH = Dimensions.get('window').width;
var { DRAWER_OFFSET } = require('../constants/ActionTypes.js');
var Icon = require('react-native-vector-icons/FontAwesome');

var ROUTES = {
  goddess: GoddessScene,
  blog: BlogScene,
  news: NewsScene,
  tags: TagsScene,
  setting: SettingScene
}

var MenuList = React.createClass({
  getInitialState: function() {
    return {
      yourState: null
    }
  },

  handleClickMenu: function(str) {
    var title = upperFirst(str);
    var component = ROUTES[str];
    var changeNavigator = this.props.changeNavigator;
    changeNavigator({
      title: title,
      component: component
    });
  },

  render: function() {
    return (
      <View style={MenuListStyle.container}>
        <View style={MenuListStyle.dividingLine}/>
        <TouchableHighlight underlayColor='#544b44' onPress={this.handleClickMenu.bind(this, 'goddess')}>
          <View style={MenuListStyle.menuItem}>
            <Icon name='heart' color='#df7454' style={MenuListStyle.menuItemIcon}/>
            <Text style={MenuListStyle.menuItemText}>GODDESS</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor='#544b44' onPress={this.handleClickMenu.bind(this, 'blog')}>
          <View style={MenuListStyle.menuItem}>
            <Icon name='rss' color='#03a9f4' style={MenuListStyle.menuItemIcon}/>
            <Text style={MenuListStyle.menuItemText}>BLOG</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor='#544b44' onPress={this.handleClickMenu.bind(this, 'news')}>
          <View style={MenuListStyle.menuItem}>
            <Icon name='newspaper-o' color='#fff' style={MenuListStyle.menuItemIcon}/>
            <Text style={MenuListStyle.menuItemText}>NEWS</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor='#544b44' onPress={this.handleClickMenu.bind(this, 'tags')}>
          <View style={MenuListStyle.menuItem}>
            <Icon name='tags' color='#29d445' style={MenuListStyle.menuItemIcon}/>
            <Text style={MenuListStyle.menuItemText}>TAGS</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor='#544b44' onPress={this.handleClickMenu.bind(this, 'setting')}>
          <View style={MenuListStyle.menuItem}>
            <Icon name='wrench' color='#111' style={MenuListStyle.menuItemIcon}/>
            <Text style={MenuListStyle.menuItemText}>SETTING</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
});

var commonValue = {
  containerMargin: 30,
  menuItemPadding: 10,
}

var menuItemWidth = SCREEN_WIDTH - DRAWER_OFFSET - commonValue.containerMargin * 2

var MenuListStyle = {
  container: {
    alignItems: 'center',
    marginTop: 30,
    marginLeft: commonValue.containerMargin,
    marginRight: commonValue.containerMargin,
  },
  dividingLine: {
    backgroundColor: '#aaa',
    height: 1,
    width: menuItemWidth
  },
  menuItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: commonValue.menuItemPadding,
    paddingBottom: commonValue.menuItemPadding,
    width: menuItemWidth
  },
  menuItemIcon: {
    fontSize: 20,
    height: 20,
    marginLeft: 20,
    marginRight: 20,
    width: 20
  },
  menuItemText: {
    color: '#ccc',
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1
  }
}

module.exports = MenuList;
