import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Avatar, Card, IconButton } from "react-native-paper";

// api
import fetchBooks from "../../api/fetchData";

export interface ReadingLayoutProps {}

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    padding: 1,
  },
});

const ReadingLayout: React.SFC<ReadingLayoutProps> = () => {
  const [list, setList] = useState<any>([]);

  const bookList: JSX.Element[] = [];
  useEffect(() => {
    const res = fetchBooks("harry+potter", "3");
    res.then((data) => {
      data.map((book, id) => {
        bookList.push(
          <Card style={styles.container} key={id}>
            <Card.Title
              title={book.volumeInfo.title}
              subtitle={book.volumeInfo.authors[0]}
              left={(props) => (
                <Avatar.Image
                  {...props}
                  source={{ uri: book.volumeInfo.imageLinks.smallThumbnail }}
                />
              )}
              right={(props) => <IconButton icon="minus" onPress={() => {}} />}
            />
          </Card>
        );
      });
      setList(bookList);
    });
  }, []);

  return list;
};

export default ReadingLayout;
