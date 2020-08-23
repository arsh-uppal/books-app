import React from "react";

import BookmarkLayout from "../components/bookmarks/BookmarkLayout";

export interface BookmarksScreenProps {}

const BookmarksScreen: React.SFC<BookmarksScreenProps> = ({ navigation }) => {
  return <BookmarkLayout navigation={navigation} />;
};

export default BookmarksScreen;
