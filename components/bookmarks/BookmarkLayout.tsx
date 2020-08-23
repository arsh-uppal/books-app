import React, { useEffect, useState } from "react";
import { Avatar, Card, Text, IconButton, Snackbar } from "react-native-paper";

import { StyleSheet } from "react-native";

import AsyncStorage from "@react-native-community/async-storage";
import { View } from "../Themed";

export interface BookmarkLayoutProps {
  navigation: any;
}

const BookmarkLayout: React.SFC<BookmarkLayoutProps> = ({
  navigation,
}: BookmarkLayoutProps) => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [img, setImg] = useState("https://picsum.photos/200/300");
  const [visible, setVisible] = React.useState(false);

  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      const readStorage = async () => {
        const jsonValue = await AsyncStorage.getItem("@storage_Key");
        const data = jsonValue != null ? JSON.parse(jsonValue) : null;
        console.log(data);
        if (data) {
          setTitle(data.title);
          setSubtitle(data.subtitle);
          setImg(data.img);
        }
      };
      readStorage();
    });

    return unsubscribe;
  }, [navigation]);

  const removeBookmark = async () => {
    try {
      await AsyncStorage.removeItem("@storage_Key");
      setTitle("");
      setVisible(true);
    } catch (e) {}
  };

  return (
    <View style={{ height: "100%" }}>
      {title === "" ? (
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            backgroundColor: "lightgrey",
          }}
        >
          No Bookmarks
        </Text>
      ) : (
        <Card style={styles.container}>
          <Card.Title
            title={title}
            subtitle={subtitle}
            left={(props) => <Avatar.Image {...props} source={{ uri: img }} />}
            right={(props) => (
              <IconButton icon="minus" onPress={removeBookmark} />
            )}
          />
        </Card>
      )}
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: "Undo",
          onPress: () => {
            // Do something
          },
        }}
      >
        Bookmark Deleted
      </Snackbar>
    </View>
  );
};

export default BookmarkLayout;

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    padding: 1,
    width: "98%",
    top: "2%",
    display: "flex",
    alignSelf: "center",
    fontSize: 10,
  },
});
