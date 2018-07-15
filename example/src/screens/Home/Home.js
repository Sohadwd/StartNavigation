import React, { Component } from "react";
import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import { Button } from "native-base";
import { Fonts } from "../../utilis/Fonts";
import Icon from "react-native-vector-icons/Ionicons";

class AuthScreen extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    if (event.type === "NavBarButtonPress") {
      if (event.id === "sideDrawerToggle") {
        this.props.navigator.toggleDrawer({
          side: "left"
        });
      }
    }
  };

  GoSecondScreen = () => {
    this.props.navigator.push({
      screen: "awesome-places.SecondScreen",
      title: "Navigation",
      navigatorButtons: {
        leftButtons: [
          {
            icon: require("../../../images/menuButton.png"),
            title: "Menu",
            id: "sideDrawerToggle"
          }
        ]
      },
      navigatorStyle: {
        navBarBackgroundColor: "#3F51B5",
        navBarNoBorder: true,
        navBarButtonColor: "white",
        navBarTextColor: "white",
        navBarTextFontSize: 30,
        navBarTextFontFamily: "Arial Rounded MT Bold"
      },
      drawer: {
        left: {
          screen: "awesome-places.SideDrawer"
        }
      }
    });
  };

  render() {
    return (
      <ImageBackground
        source={require("../../../images/Rectangle.png")}
        style={styles.MainContainer}
      >
        <View style={styles.body}>
          <Image source={require("../../../images/logo.png")} />
          <Button
            primary
            block
            onPress={this.GoSecondScreen}
            style={styles.orderNowButton}
          >
            <Text style={styles.textOrderButton}>Second Screen</Text>
          </Button>
          <View style={styles.buttonGroup} />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center"
  },
  body: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100%",
    alignSelf: "center"
  },
  orderNowButton: {
    justifyContent: "center",
    alignSelf: "center",
    width: 320.16,
    height: 54.73,
    backgroundColor: "#FF4081",
    borderRadius: 9
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  textOrderButton: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: Fonts.Amiritalic
  },
  MainContainer: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: "blue"
  }
});

export default AuthScreen;
