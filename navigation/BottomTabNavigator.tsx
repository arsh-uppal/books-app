import * as React from "react";

// navigations
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

// constants
import Colors from "../constants/Colors";

// components
import HomeScreen from "../screens/HomeScreen";
import ReadingScreen from "../screens/ReadingScreen";
import BookmarksScreen from "../screens/BookmarksScreen";
import ReadScreen from "../screens/ReadScreen";
import BookInfo from "../components/home/BookInfo";
import { FeatherIcons } from "../components/shared/IconsLibs";

// others
import useColorScheme from "../hooks/useColorScheme";

import {
  BottomTabParamList,
  ReadingTabParamList,
  BookmarkTabParamList,
  ReadTabParamList,
  HomeTabParamList,
} from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeTabNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FeatherIcons name="home" color="black" size={25} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Reading"
        component={ReadingTabNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FeatherIcons name="book-open" color="black" size={25} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Bookmarks"
        component={BookmarkTabNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FeatherIcons name="bookmark" color="black" size={25} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Read"
        component={ReadTabNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FeatherIcons name="book" color="black" size={25} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

const HomeTabStack = createStackNavigator<HomeTabParamList>();

function HomeTabNavigator() {
  return (
    <HomeTabStack.Navigator initialRouteName="HomeTabScreen">
      <HomeTabStack.Screen
        name="HomeTabScreen"
        component={HomeScreen}
        options={{ headerTitle: "Home", headerShown: false }}
      />
      <HomeTabStack.Screen
        name="InfoScreen"
        component={BookInfo}
        options={{ headerTitle: "Details", headerShown: true }}
      />
    </HomeTabStack.Navigator>
  );
}

const ReadingTabStack = createStackNavigator<ReadingTabParamList>();

function ReadingTabNavigator() {
  return (
    <ReadingTabStack.Navigator>
      <ReadingTabStack.Screen
        name="ReadingTabScreen"
        component={ReadingScreen}
        options={{ headerTitle: "Reading", headerShown: true }}
      />
    </ReadingTabStack.Navigator>
  );
}

const BookmarkTabStack = createStackNavigator<BookmarkTabParamList>();

function BookmarkTabNavigator() {
  return (
    <BookmarkTabStack.Navigator>
      <BookmarkTabStack.Screen
        name="BookmarkTabScreen"
        component={BookmarksScreen}
        options={{ headerTitle: "Bookmarks", headerShown: true }}
      />
    </BookmarkTabStack.Navigator>
  );
}

const ReadTabStack = createStackNavigator<ReadTabParamList>();

function ReadTabNavigator() {
  return (
    <ReadTabStack.Navigator>
      <ReadTabStack.Screen
        name="ReadTabScreen"
        component={ReadScreen}
        options={{ headerTitle: "Reading", headerShown: true }}
      />
    </ReadTabStack.Navigator>
  );
}
