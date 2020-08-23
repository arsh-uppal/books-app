import React from "react";
import {
  AntDesign,
  Feather,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

function AntIcons(props: { name: string; color: string; size: number }) {
  return <AntDesign style={{ marginBottom: -3 }} {...props} />;
}

function FeatherIcons(props: { name: string; color: string; size: number }) {
  return <Feather style={{ marginBottom: -3 }} {...props} />;
}

function FontAwesomeIcons(props: {
  name: string;
  color: string;
  size: number;
}) {
  return <FontAwesome style={{ marginBottom: -3 }} {...props} />;
}

function IonIcons(props: { name: string; color: string; size: number }) {
  return <Ionicons style={{ marginBottom: -3 }} {...props} />;
}

function MaterialCommIcons(props: {
  name: string;
  color: string;
  size: number;
}) {
  return <MaterialCommunityIcons style={{ marginBottom: -3 }} {...props} />;
}

export {
  AntIcons,
  FeatherIcons,
  FontAwesomeIcons,
  IonIcons,
  MaterialCommIcons,
};
