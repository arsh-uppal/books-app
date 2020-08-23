import React, { useState } from "react";
import { StyleSheet, Dimensions } from "react-native";

// components
import HomeLayout from "./HomeLayout";

// other
import { Text, View } from "../Themed";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 2.5) / 4);

const DATA: any = [];
for (let i = 0; i < 10; i++) {
  DATA.push(i);
}

export default function Featured() {
  return (
    <View style={styles.container}>
      <Text>Computer Science</Text>
      <HomeLayout
        DATA={DATA}
        SLIDER_WIDTH={SLIDER_WIDTH}
        ITEM_WIDTH={ITEM_WIDTH}
        ITEM_HEIGHT={ITEM_HEIGHT}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "center",
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor: "blue",
  },
});
