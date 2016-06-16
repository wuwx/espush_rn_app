/**
 * Created by Sunday on 2016/6/12.
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, AppRegistry, StatusBar, Navigator, ToolbarAndroid, ListView, Image, TouchableOpacity, WebView} from 'react-native';
import {constant} from "./constant";

var _ = require("lodash");


var about_html = `
<!doctype html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <h1>关于</h1>
    <p>ESPUSH是一个ESP8266 WIFI物理网芯片开发的推送服务平台，具备实时远程数据推送，智能数据采集与整理归纳，云端自动推送升级等功能。</p>
    <p>ESPUSH只希望解决一个问题，即能在任何有网络的地方随时控制处于内网中的WIFI设备，譬如使用公司WIFI控制家里的机器人小车，回家的路上使用4G网络预先打开的热水器、空调器等。<a href="http://blog.espush.cn/">点此</a>查看示例</p>
    <h4>如何使用?</h4>
    <p>教程在<a href="http://docs.espush.cn/">这里</a>.</p>
    <p>尝试在10分钟内做一个<a href="http://blog.espush.cn/ten_minute_socket.html">智能插座</a>.</p>
    <p>数据采集，绘图的例子：<a href="http://blog.espush.cn/ten_minute_humiture_sensor.html">温度传感器</a>数据在离线时还能缓存哦。</p>
    <h4>其他事项</h4>
    <p>这里是<a href="https://github.com/pushdotccgzs/espush_at">AT固件的github</a>链接，此AT固件基于官方最新的AT固件定制，新增了用于推送以及GPIO操作等多条指令。</p>
</body>
</html>
`;


export default class AboutView extends Component {
    constructor(props) {
        super(props);
    }

    onIconClicked = () => {
        const {navigator} = this.props;
        if(!navigator) {
            alert('内部错误！');
            return;
        }
        navigator.pop();
    };
    render() {
        return (
            <View style={styles.rootContainer}>
                <ToolbarAndroid
                    style={styles.toolbar}
                    navIcon={require("../resources/images/back.png")}
                    titleColor="white"
                    onIconClicked={this.onIconClicked}
                    title="关于" />
                <WebView
                    style={styles.webview}
                    html={about_html} />
            </View>
        );
    }
}
var BGWASH = 'rgba(255,255,255,0.8)';

styles = StyleSheet.create({
    rootContainer: {
        flexDirection: 'column',
        flex: 1
    },
    toolbar: {
        height: 48,
        backgroundColor: constant.navBackgroundColor
    },
    webview: {
        backgroundColor: BGWASH
    }
});
