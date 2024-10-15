import PrimarySearchBar from "@/components/inputs/PrimarySearchBar";
import { useState } from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import { Avatar, Icon, Text } from "react-native-paper";
import { usersData } from "@/assets/mockData";
import myTheme from "@/assets/theme";
import { PrimaryIconButton } from "@/components";

export default function TabTwoScreen() {
  const [searchValue, setSearchValue] = useState("");
  const [filteredList, setFilteredList] = useState(usersData);

  const handleSearch = (query: string) => {
    setSearchValue(query);

    if (query.trim() === "") {
      setFilteredList(usersData);
    } else {
      const filtered = usersData
        .slice()
        .filter(
          (item) =>
            item.first_name.toLowerCase().includes(query.toLowerCase()) ||
            item.last_name.toLowerCase().includes(query.toLowerCase()) ||
            item.skills.toLowerCase().includes(query.toLowerCase())
        );

      setFilteredList(filtered);
    }
  };

  return (
    <View style={styles.screenContainer}>
      <PrimarySearchBar
        placeholder="What you looking for ?"
        traileringIcon="filter-outline"
        value={searchValue}
        onChangeText={handleSearch}
      />

      <View style={{ height: "75%" }}>
        <FlatList
          data={filteredList}
          scrollEnabled={true}
          contentContainerStyle={styles.resultsContainer}
          renderItem={({ item, index }) => (
            <View style={styles.itemContainer} key={index}>
              <View style={styles.itemWrapper}>
                <View>
                  <Avatar.Image
                    source={{ uri: "https://picsum.photos/200/300" }}
                    size={60}
                  />
                </View>

                <View style={styles.itemContent}>
                  <Text variant="headlineMedium" numberOfLines={1}>
                    {item.first_name + " " + item.last_name}
                  </Text>
                  <View>
                    <Text variant="bodyMedium">{item.skills}</Text>
                  </View>
                </View>
              </View>

              <View style={{ alignSelf: "flex-start" }}>
                <PrimaryIconButton iconName="chatbox-outline" />
              </View>
            </View>
          )}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 20,
    gap: 20,
    overflow: "scroll",
  },
  resultsContainer: {
    gap: 20,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    padding: 15,
    backgroundColor: myTheme.colors.white,
    borderRadius: 20,
  },
  itemWrapper: {
    flexDirection: "row",
    alignItems: "center",
    width: "60%",
    gap: 10,
  },
  itemImage: {
    borderRadius: 30,
  },
  itemContent: {},
});
