import * as React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView, FlatList, StatusBar } from "react-native";

// easy-grid
import { Col, Row, Grid } from "react-native-easy-grid";

// components
import Search from "../components/home/Search";
import Featured from "../components/home/Featured";
import OtherCategories from "../components/home/OtherCategories";

// other
import { Text } from "../components/Themed";

// navigation
import { StackNavigationProp } from "@react-navigation/stack";
import { HomeTabParamList } from "../types";

type ScreenNavigationProp = StackNavigationProp<
  HomeTabParamList,
  "HomeTabScreen"
>;

// will fix the navigation warning later

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Grid>
        <Row size={10} style={styles.search}>
          <Search />
        </Row>
        <Row size={36} style={styles.featured}>
          <Featured navigation={navigation} />
        </Row>
        <Row size={27} style={styles.webDev}>
          <OtherCategories
            navigation={navigation}
            name={"Best fiction"}
            type={"fiction"}
          />
        </Row>
        <Row size={27} style={styles.nonFiction}>
          <OtherCategories
            navigation={navigation}
            name={"Hand picked non-fiction"}
            type={"inspiration"}
          />
        </Row>
      </Grid>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  search: {
    backgroundColor: "pink",
  },
  featured: {
    backgroundColor: "red",
  },
  webDev: {
    backgroundColor: "yellow",
  },
  nonFiction: {
    backgroundColor: "pink",
    top: -2,
  },
});
