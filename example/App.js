import {Navigation} from "react-native-navigation";
import {Provider} from "react-redux";
import AuthScreen from "./src/screens/Home/Home";
import SideDrawer from "./src/screens/SideDrawer/SideDrawer";
import configureStore from "./src/store/configureStore";
import React from "react";
import {APP_NAME_PREFIX} from "./src/utilis/constant";
import {registerScreens} from "./src/screens";

const store = configureStore();

/**
 * default navigator style
 * @type {{statusBarColor: string, statusBarTextColorScheme: string, navigationBarColor: string, navBarBackgroundColor: string, navBarTextColor: string, navBarButtonColor: string, tabBarButtonColor: string, tabBarSelectedButtonColor: string, tabBarBackgroundColor: string, topBarElevationShadowEnabled: boolean, navBarHideOnScroll: boolean, tabBarHidden: boolean, drawUnderTabBar: boolean}}
 */
export const navigatorStyle = {
    statusBarColor: '#3F51B5',
    statusBarTextColorScheme: 'light',
    navigationBarColor: 'black',
    navBarTextColor: 'white',
    navBarButtonColor: 'white',
    tabBarButtonColor: 'red',
    tabBarSelectedButtonColor: 'red',
    tabBarBackgroundColor: 'white',
    topBarElevationShadowEnabled: false,
    navBarHideOnScroll: true,
    tabBarHidden: true,
    drawUnderTabBar: true,
    navBarBackgroundColor: "#3f51b5",

};


registerScreens(store, Provider);


//start the App
Navigation.startSingleScreenApp({
    screen: {
        // AuthScreen
        screen: APP_NAME_PREFIX + "AuthScreen",

        navigatorButtons: {
            leftButtons: [
                {
                    icon: require("./images/menuButton.png"),
                    title: "Menu",
                    id: "sideDrawerToggle"
                }
            ]
        },

        navigatorStyle: {
            navBarBackgroundColor: "#3F51B5",
            navBarNoBorder: true,
            navBarButtonColor: "white"
        }
    },
    drawer: {
        left: {
            screen: APP_NAME_PREFIX + "SideDrawer"
        }
    }
});
