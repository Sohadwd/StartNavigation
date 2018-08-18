import {Navigation} from "react-native-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import {APP_NAME_PREFIX} from "../../utilis/constant";
import FirstScreenTabIcon from "../FirstScreenTabIcon/FirstScreenTabIcon";
import SecondScreenTabIcon from "../SecondScreenTabIcon/SecondScreenTabIcon";
import ThirdScreenTabIcon from "../ThidScreenTabIcon/ThirdScreenTabIcon";
import FourthScreenTabIcon from "../FourthScreenTabIcon/FourthScreenTabIcon";
import SideDrawer from "../SideDrawer/SideDrawer";

const startTabs = () => {
    Promise.all([
        Icon.getImageSource("ios-home", 30),
        Icon.getImageSource("ios-search", 30),
        Icon.getImageSource("ios-heart", 30),
        Icon.getImageSource("ios-contact", 30),
        Icon.getImageSource("ios-menu", 30)


    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: APP_NAME_PREFIX + "FirstScreenTabIcon",
                    label: "Home",
                    title: "Home",
                    icon: sources[0],
                    passProps: {
                        test: 'Home'
                    },
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[4],
                                title: "Menu",
                                id: "sideDrawerToggle"
                            }
                        ]
                    }
                },
                {
                    screen: APP_NAME_PREFIX + "SecondScreenTabIcon",
                    label: "Search",
                    title: "Search",
                    icon: sources[1],
                    passProps: {
                        test: 'Search'
                    }, navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[4],
                                title: "Menu",
                                id: "sideDrawerToggle"
                            }
                        ]
                    }
                },
                {
                    screen: APP_NAME_PREFIX + "ThirdScreenTabIcon",
                    label: "Favourites",
                    title: "Favorites",
                    icon: sources[2],
                    passProps: {
                        test: 'Favorites'
                    }, navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[4],
                                title: "Menu",
                                id: "sideDrawerToggle"
                            }
                        ]
                    }
                },
                {
                    screen: APP_NAME_PREFIX + "FourthScreenTabIcon",
                    label: "Account",
                    title: " Account",
                    icon: sources[3],
                    passProps: {
                        test: 'Account'
                    }, navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[4],
                                title: "Menu",
                                id: "sideDrawerToggle"
                            }
                        ]
                    }
                },


            ],
            drawer: {
                left: {
                    screen: APP_NAME_PREFIX + "SideDrawer"
                }
            }
        });
    });
};

export default startTabs;
