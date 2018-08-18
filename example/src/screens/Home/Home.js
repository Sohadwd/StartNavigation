import React, {Component} from "react";
import {Image, ImageBackground, StyleSheet, Text, View} from "react-native";
import {Button} from "native-base";
import {Fonts} from "../../utilis/Fonts";
import {navigatorStyle} from "../../../App";
import {APP_NAME_PREFIX} from "../../utilis/constant";
import SecondScreen from "../SecondScreen/SecondScreen";
import SideDrawer from "../SideDrawer/SideDrawer";

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
            screen: APP_NAME_PREFIX + "SecondScreen",
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
            navigatorStyle,
            drawer: {
                left: {
                    screen: APP_NAME_PREFIX + "SideDrawer"
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
                    <Image source={require("../../../images/logo.png")}/>
                    <Button
                        primary
                        block
                        onPress={this.GoSecondScreen}
                        style={styles.orderNowButton}
                    >
                        <Text style={styles.textOrderButton}>Go To Tabs Screen</Text>
                    </Button>
                    <View style={styles.buttonGroup}/>
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
        fontFamily: Fonts.AmiriItalic
    },

});

export default AuthScreen;
