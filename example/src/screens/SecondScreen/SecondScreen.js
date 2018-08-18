import React, {Component} from "react";
import {Text, View} from "react-native";
import {Button} from "native-base";
import startMainTabs from "../MainTabs/startMainTabs";

class SecondScreen extends Component {
    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    GoTabsScreen = () => {
        startMainTabs();
    };

    onNavigatorEvent = event => {
        if (event.type === "NavBarButtonPress") {
            if (event.id === "sideDrawerToggle") {
                this.props.navigator.toggleDrawer({
                    side: "left"
                });
            }
        }
    };

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center"
                }}
            >
                <Button
                    primary
                    block
                    onPress={this.GoTabsScreen}
                    style={{
                        justifyContent: "center",
                        backgroundColor: "#3F51B5",
                        marginHorizontal: 30,
                        borderRadius: 9
                    }}
                >
                    <Text
                        style={{
                            fontSize: 25,
                            color: "white"
                        }}
                    >
                        Main Tabs Screen
                    </Text>
                </Button>
            </View>
        );
    }
}

export default SecondScreen;
