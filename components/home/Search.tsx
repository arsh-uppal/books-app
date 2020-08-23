import * as React from "react";
import { StyleSheet } from "react-native";

// ui-paper
import { Searchbar } from "react-native-paper";

// other
import { Text, View } from "../Themed";

export interface SearchProps {}

const Search: React.SFC<SearchProps> = () => {
  const [searchQuery, setSaerchQuery] = React.useState("");

  const handleSearch = (searchQuery: string) => {
    setSaerchQuery(searchQuery);
  };

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={(searchQuery) => handleSearch(searchQuery)}
        value={searchQuery}
        style={styles.searchBar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  searchBar: {
    height: "auto",
    width: "80%",
    margin: "2%",
  },
});
export default Search;
