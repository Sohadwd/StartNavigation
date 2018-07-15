import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/Ionicons";

const startTabs = () => {
  Promise.all([
    Icon.getImageSource("md-map", 30),
    Icon.getImageSource("ios-share-alt", 30),
    Icon.getImageSource("ios-menu", 30)
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: "awesome-places.FirstScreenTabIcon",
          label: "First Icon",
          title: "First Screen Tab Icon",
          icon: sources[0],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[2],
                title: "Menu",
                id: "sideDrawerToggle"
              }
            ]
          }
        },
        {
          screen: "awesome-places.SecondScreenTabIcon",
          label: "Second Icon",
          title: "Second Screen Tab Icon",
          icon: sources[1],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[2],
                title: "Menu",
                id: "sideDrawerToggle"
              }
            ]
          }
        }
      ],
      drawer: {
        left: {
          screen: "awesome-places.SideDrawer"
        }
      }
    });
  });
};

export default startTabs;
