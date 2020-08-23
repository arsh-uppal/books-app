import React from "react";

import { StyleSheet, Button, TouchableOpacity } from "react-native";

// ui-paper
import { Avatar, Card, Title, Paragraph } from "react-native-paper";

// snap-carousel
import Carousel from "react-native-snap-carousel";

// others
import { scrollInterpolator, animatedStyles } from "./utils/animations";
import { Text, View } from "../Themed";

export interface HomeLayoutProps {
  DATA: any;
  SLIDER_WIDTH: number;
  ITEM_HEIGHT: number;
  ITEM_WIDTH: number;
  booksInfo: any;
  navigation: any;
  styles: any;
  itemWidth: number;
}

const HomeLayout: React.SFC<HomeLayoutProps> = ({
  DATA,
  SLIDER_WIDTH,
  ITEM_WIDTH,
  ITEM_HEIGHT,
  booksInfo,
  navigation,
  styles,
  itemWidth,
}: HomeLayoutProps) => {
  const getCards = () => {
    const data: JSX.Element[] = [];
    booksInfo.map((book: { id: any }) => {
      console.log(book.id);
      data.push(<Text>{book.id}</Text>);
    });
    return data;
  };

  const _renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          console.log(item.volumeInfo.title);
          navigation.navigate("InfoScreen", { bookDetailLinks: item.selfLink });
        }}
        style={styles.touchControl}
      >
        <View style={styles.itemContainer}>
          <Card style={styles.bookCard}>
            <Card.Cover
              style={styles.bookImg}
              resizeMode={`center`}
              source={{
                uri: item.volumeInfo.imageLinks.smallThumbnail,
              }}
            />
            <Card.Content style={styles.bookAction}>
              <Text numberOfLines={1} style={styles.bookTitle}>
                {item.volumeInfo.title}
              </Text>
            </Card.Content>
          </Card>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Carousel
      data={booksInfo}
      renderItem={_renderItem}
      sliderWidth={SLIDER_WIDTH}
      itemWidth={itemWidth}
      containerCustomStyle={styles.carouselContainer}
      inactiveSlideShift={0}
      onSnapToItem={(index) => {}}
      scrollInterpolator={scrollInterpolator}
      slideInterpolatedStyle={animatedStyles}
      useScrollView={true}
    />
  );
};

export default HomeLayout;
