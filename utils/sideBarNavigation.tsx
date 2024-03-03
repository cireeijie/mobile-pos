import * as React from "react";
import { Text, Pressable, View, Dimensions } from "react-native";
import {
  NavigationHelpersContext,
  useNavigationBuilder,
  TabRouter,
  TabActions,
  createNavigatorFactory,
} from "@react-navigation/native";
import { COLORS } from "../assets/styles/colors";

export const sideBarNavigation = createNavigatorFactory(TabNavigator);

let ScreenHeight = Dimensions.get("window").height;

function TabNavigator({
  initialRouteName,
  children,
  screenOptions,
  tabBarStyle,
  contentStyle,
}: any) {
  const { state, navigation, descriptors, NavigationContent } =
    useNavigationBuilder(TabRouter, {
      children,
      screenOptions,
      initialRouteName,
    });

  return (
    <NavigationContent>
      <View style={{ flexDirection: "row", height: ScreenHeight }}>
        <View style={[{ backgroundColor: COLORS.white }, tabBarStyle]}>
          <View style={{ flex: 1 }}>
            {state.routes.map(
              (route, index) =>
                route.name !== "Settings" &&
                route.name !== "Logout" && (
                  <Pressable
                    key={route.key}
                    onPress={() => {
                      const isFocused = state.index === index;
                      const event = navigation.emit({
                        type: "tabPress",
                        target: route.key,
                        canPreventDefault: true,
                      }) as { defaultPrevented: boolean };

                      if (!isFocused && !event.defaultPrevented) {
                        navigation.dispatch({
                          ...TabActions.jumpTo(route.name, route.params),
                          target: state.key,
                        });
                      }
                    }}
                  >
                    {descriptors[route.key].options.tabBarIcon({
                      focused: state.index === index,
                    })}
                  </Pressable>
                )
            )}
          </View>
          <View>
            {state.routes.map(
              (route, index) =>
                (route.name === "Settings" || route.name === "Logout") && (
                  <Pressable
                    key={route.key}
                    onPress={() => {
                      const isFocused = state.index === index;
                      const event = navigation.emit({
                        type: "tabPress",
                        target: route.key,
                        canPreventDefault: true,
                      }) as { defaultPrevented: boolean };

                      if (!isFocused && !event.defaultPrevented) {
                        navigation.dispatch({
                          ...TabActions.jumpTo(route.name, route.params),
                          target: state.key,
                        });
                      }
                    }}
                  >
                    {descriptors[route.key].options.tabBarIcon({
                      focused: state.index === index,
                    })}
                  </Pressable>
                )
            )}
          </View>
        </View>
        <View
          style={[
            { flex: 1, backgroundColor: COLORS.bgGray, padding: 15 },
            contentStyle,
          ]}
        >
          {state.routes.map((route, i) => {
            return (
              <View
                key={route.key}
                style={[
                  { display: i === state.index ? "flex" : "none", flex: 1 },
                ]}
              >
                {descriptors[route.key].render()}
              </View>
            );
          })}
        </View>
      </View>
    </NavigationContent>
  );
}
