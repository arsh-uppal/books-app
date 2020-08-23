import React from "react";

import { View } from "react-native";

// components
import ReadingLayout from "../components/reading/ReadingLayout";

export interface ReadingScreenProps {}

const ReadingScreen: React.SFC<ReadingScreenProps> = () => {
  return (
    <View style={{ padding: 4 }}>
      <ReadingLayout />
    </View>
  );
};

export default ReadingScreen;
