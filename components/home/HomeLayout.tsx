import React from "react";

import { StyleSheet } from "react-native";

// ui-paper
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

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
}

const HomeLayout: React.SFC<HomeLayoutProps> = ({
  DATA,
  SLIDER_WIDTH,
  ITEM_WIDTH,
  ITEM_HEIGHT,
}: HomeLayoutProps) => {
  const styles = StyleSheet.create({
    carouselContainer: {},
    itemContainer: {
      width: ITEM_WIDTH,
      height: ITEM_HEIGHT,
      alignItems: "center",
    },
    itemLabel: {
      color: "white",
    },
    bookCard: {
      width: "100%",
      height: "100%",
    },
    bookImg: {
      height: "80%",
      width: 100,
    },
    bookAction: {
      height: "20%",
    },
  });

  const _renderItem = () => {
    return (
      <View style={styles.itemContainer}>
        <Card style={styles.bookCard}>
          <Card.Cover
            style={styles.bookImg}
            resizeMode={`center`}
            source={{
              uri:
                "https://books.google.com/books/content?id=agHRDwAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            }}
          />
          <Card.Content style={styles.bookAction}>
            <Paragraph>Book Name</Paragraph>
          </Card.Content>
        </Card>
      </View>
    );
  };

  return (
    <Carousel
      data={DATA}
      renderItem={_renderItem}
      sliderWidth={SLIDER_WIDTH}
      itemWidth={ITEM_WIDTH}
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
