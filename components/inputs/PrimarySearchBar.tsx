import React from "react";
import { Searchbar, SearchbarProps } from "react-native-paper";

const PrimarySearchBar: React.FC<SearchbarProps> = ({ ...props }) => {
  return (
    <Searchbar
      style={{
        backgroundColor: "rgb(255, 255, 255)",
      }}
      placeholderTextColor="#A2A2A2"
      traileringIconColor="#A2A2A2"
      iconColor="#A2A2A2"
      {...props}
    />
  );
};

export default PrimarySearchBar;
