import * as React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView, FlatList, StatusBar } from "react-native";

// easy-grid
import { Col, Row, Grid } from "react-native-easy-grid";

// components
import Featured from "../components/home/Featured";
import Search from "../components/home/Search";

// other
import { Text } from "../components/Themed";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Grid>
        <Row size={10} style={styles.search}>
          <Search />
        </Row>
        <Row size={40} style={styles.featured}>
          <Featured />
        </Row>
        <Row size={25} style={styles.webDev}>
          <Text>Web dev</Text>
        </Row>
        <Row size={25} style={styles.nonFiction}>
          <Text>Non Fiction</Text>
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
  },
});
