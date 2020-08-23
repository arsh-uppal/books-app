import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

// storage
import AsyncStorage from "@react-native-community/async-storage";

// ui-paper
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  Snackbar,
} from "react-native-paper";

// api
import { fetchBookData } from "../../api/fetchData";

export interface BookInfoProps {
  route: any;
  navigation: any;
}

const BookInfo: React.SFC<BookInfoProps> = ({ route, navigation }) => {
  const { itemId } = route.params;
  const [title, setTitle] = useState("...loading");
  const [subtitle, setSubtitle] = useState("...loading");
  const [author, setAuthor] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState(
    "https://i.picsum.photos/id/263/200/300.jpg?hmac=_3gUXUjqs7PiEu_rAuPqS0Oa4X18Og5yS-C1HQ3KvtE"
  );

  const [bookmarkBtnCheck, setBookmarkBtnCheck] = useState(false);

  // snackbar
  const [visible, setVisible] = React.useState(false);
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);

  useEffect(() => {
    const { bookDetailLinks } = route.params;
    const data = fetchBookData(bookDetailLinks);
    data.then((data) => {
      setTitle(data.volumeInfo.title);
      setSubtitle(data.volumeInfo.subtitle);
      setAuthor(data.volumeInfo.authors[0]);
      setDesc(data.volumeInfo.description);
      setImg(data.volumeInfo.imageLinks.medium);
    });
  }, []);

  const handleBookMark = async () => {
    setBookmarkBtnCheck(true);
    setVisible(true);
    const bookMarkDataTemp = {
      title: title,
      subtitle: subtitle,
      img: img,
    };
    const jsonValue = JSON.stringify(bookMarkDataTemp);
    await AsyncStorage.setItem("@storage_Key", jsonValue);
  };
  return (
    <>
      <Card style={styles.container}>
        <Card.Title title={title} subtitle={subtitle} />
        <Card.Cover style={styles.img} source={{ uri: img }} />
        <Card.Content style={styles.content}>
          <Title>{author}</Title>
          <Paragraph>
            {desc.length > 500 ? desc.slice(0, 500) + " ..." : desc}
          </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button style={styles.btn} mode="outlined" icon="book">
            Reading
          </Button>
          <Button
            style={styles.btn}
            mode={bookmarkBtnCheck ? "contained" : "outlined"}
            onPress={handleBookMark}
            icon="bookmark"
          >
            Bookmark
          </Button>
          <Button style={styles.btn} mode="outlined" icon="plus">
            Add to Read
          </Button>
        </Card.Actions>
      </Card>
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
        Added to bookmarks
      </Snackbar>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: "98%",
    display: "flex",
    top: "0.5%",
    alignSelf: "center",
  },
  content: {
    marginTop: "2%",
  },
  img: {
    height: 350,
    width: 248,
    left: "22%",
  },
  btn: {
    width: "30%",
    marginLeft: "2%",
    color: "black",
  },
});

export default BookInfo;
