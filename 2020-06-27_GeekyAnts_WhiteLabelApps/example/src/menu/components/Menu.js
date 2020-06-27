import React from "react";
import PropTypes from "prop-types";
import {View, StyleSheet, SafeAreaView} from "react-native";
import UriBox from "react-native-uri-box";
import {Content, List, Header, ListItem, Text, Icon, Left, Right} from "native-base";
import Animation from "lottie-react-native";

import {Syntax} from "../../syntax";

const styles = StyleSheet.create({
  flex: {flex: 1},
  center: {alignItems: 'center', justifyContent: 'center'},
  logo: {width: "100%", height: 200},
  title: {fontWeight: "bold"},
  orange: {backgroundColor: "orange"},
  bottom: {justifyContent: "flex-end"},
  anim: {width: 300, height: 300},
  padding: {padding: 5},
});

const code = `
// Hey, GeekyAnts Bangalore Meetup!
// This is a project which demonstrates a few
// libraries which are really useful for the
// development of White Label Apps.

// If you're interested in checking out my
// other projects, you can find me here:

const alias = "cawfree";
const twitter = \`https://twitter.com/\$\{alias\}\`;
const github = \`https://github.com/\$\{alias\}\`;

// <3 <3 <3
`.trim();

const Menu = ({onPressFont, onPressUri, ...extraProps}) => {
  return (
    <View
      style={styles.flex}
    >
      <View
        style={[styles.center, styles.orange]}
      >
        <Animation
          style={styles.anim}
          source={require('../../../assets/robot.json')}
          loop
          autoPlay
        />
      </View>
      <Content
      >
        <List>
          <ListItem
            first
            itemHeader
          >
            <Text
              style={styles.title}
              children="White Label Examples"
            />
          </ListItem>
          <ListItem
            onPress={onPressFont}
          >
            <Left>
              <Text
                children="react-native-custom-fonts"
              />
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem
            onPress={onPressUri}
          >
            <Left>
              <Text
                children="react-native-uri-box"
              />
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem
            last
          >
            <Left>
              <Text
                children="propeteer"
              />
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
        </List>
      </Content>
      <View
        style={[styles.flex, styles.bottom, styles.padding]}
      >
        <Syntax
          style={{
            width: "100%",
          }}
          code={code}
        />
      </View>
      <SafeAreaView />
    </View>
  );
};

Menu.propTypes = {
  onPressFont: PropTypes.func.isRequired,
  onPressUri: PropTypes.func.isRequired,
  repoAddress: PropTypes.string,
  twitterAddress: PropTypes.string,
};

Menu.defaultProps = {
  repoAddress: "https://github.com/cawfree",
  twitterAddress: "https://twitter.com/cawfree",
};

export default Menu;
