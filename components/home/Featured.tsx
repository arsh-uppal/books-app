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

export default function Featured(props: { navigation: any }) {
  const [booksInfo, setBooksInfo] = useState<any>([]);

  useEffect(() => {
    const data = fetchBooks();
    data.then((books) => {
      setBooksInfo(books);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Top-rated Science books</Text>
      <HomeLayout
        DATA={DATA}
        SLIDER_WIDTH={SLIDER_WIDTH}
        ITEM_WIDTH={ITEM_WIDTH}
        ITEM_HEIGHT={ITEM_HEIGHT}
        booksInfo={booksInfo}
        navigation={props.navigation}
        styles={styles}
        itemWidth={180}
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
    top: "5%",
    alignItems: "center",
    width: 160,
  },
  itemLabel: {
    color: "white",
  },
  bookCard: {
    height: 250,
    width: 160,
    borderBottomColor: "black",
  },
  bookTitle: {
    fontWeight: "bold",
    fontSize: 12,
    top: 5,
  },
  bookImg: {
    width: 160,
    height: 220,
  },
  bookAction: {
    height: 35,
    flex: 1,
  },
  touchControl: {
    width: 160,
    left: -120,
  },
  text: {
    fontWeight: "bold",
    fontSize: 17,
    marginLeft: 30,
  },
});
