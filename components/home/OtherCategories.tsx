import React, { useEffect, useState } from "react";
import { StyleSheet, Dimensions } from "react-native";

// components
import HomeLayout from "./HomeLayout";

// other
import { Text, View } from "../Themed";

// api
import fetchBooks from "../../api/fetchData";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 2.5) / 4);

const DATA: any = [];
for (let i = 0; i < 10; i++) {
  DATA.push(i);
}

export default function OtherCategories(props: {
  navigation: any;
  name: "string";
  type: "string";
}) {
  const [booksInfo, setBooksInfo] = useState<any>([]);

  useEffect(() => {
    console.log(props.type);
    const data = fetchBooks(props.type);
    data.then((books) => {
      setBooksInfo(books);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.name}</Text>
      <HomeLayout
        DATA={DATA}
        SLIDER_WIDTH={SLIDER_WIDTH}
        ITEM_WIDTH={ITEM_WIDTH}
        ITEM_HEIGHT={ITEM_HEIGHT}
        booksInfo={booksInfo}
        navigation={props.navigation}
        styles={styles}
        itemWidth={130}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "left",
    justifyContent: "center",
  },
  carouselContainer: {},
  itemContainer: {
    top: "6%",
    alignItems: "center",
    width: 110,
  },
  itemLabel: {
    color: "white",
  },
  bookCard: {
    height: 170,
    width: 110,
    borderBottomColor: "black",
  },
  bookImg: {
    width: 110,
    height: 150,
  },
  bookAction: {
    height: 20,
    flex: 1,
  },
  touchControl: {
    width: 97,
    left: -148,
  },
  text: {
    fontWeight: "bold",
    fontSize: 14,
    marginLeft: 30,
  },
});
