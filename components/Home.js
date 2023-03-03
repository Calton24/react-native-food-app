import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import catagoriesData from "../assets/data/catagoriesData";
import popularData from "../assets/data/popularData";
import colors from "../assets/colors/colors";

Feather.loadFont();
MaterialCommunityIcons.loadFont();

const Home = ({ navigation }) => {
  const renderCatagoryItem = ({ item }) => {
    return (
      <View
        style={[
          styles.catagoryItemWrapper,
          {
            backgroundColor: item.selected ? colors.primary : colors.white,
            marginLeft: item.id == 1 ? 20 : 0,
          },
        ]}
      >
        <Image source={item.image} style={styles.catagoryItemImage} />
        <Text style={styles.catagoryItemTitle}>{item.title} </Text>
        <View
          style={[
            styles.catagorySelectWrapper,
            {
              backgroundColor: item.selected ? colors.white : colors.secondary,
            },
          ]}
        >
          <Feather
            name="chevron-right"
            size={8}
            style={styles.catagorySelectIcon}
            color={item.selected ? colors.black : colors.white}
          />
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
      >
        {/*Header */}
        <SafeAreaView>
          <View style={styles.headerWrapper}>
            <Image
              source={require("../assets/images/profile.png")}
              style={styles.profileImage}
            />
            <Feather name="menu" size={24} color={colors.textDark} />
          </View>
        </SafeAreaView>

        {/* Titles */}
        <View style={styles.titlesWrapper}>
          <Text style={styles.titlesSubtitles}>Food</Text>
          <Text style={styles.stylesTitle}>Delivery</Text>
        </View>

        {/*Search */}
        <View style={styles.searchWrapper}>
          <Feather name="search" size={16} color={colors.textDark} />
          <View style={styles.search}>
            <Text style={styles.searchText}>Search</Text>
          </View>
        </View>

        {/*Catagories */}
        <View style={styles.catagoriesWrapper}>
          <Text style={styles.catagoriesTitle}>Catagories</Text>
          <View styles={styles.catagoriesListWrapper}>
            <FlatList
              data={catagoriesData}
              renderItem={renderCatagoryItem}
              keyExtractor={(item) => item.id}
              horizontal={true}
            />
          </View>
        </View>

        {/*Popular */}
        <View style={styles.popularWrapper}>
          <Text styles={styles.popularTitle}>Popular</Text>
          {popularData.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() =>
                navigation.navigate("Details", {
                  item: item,
                })
              }
            >
              <View
                style={[
                  styles.popularCardWrapper,
                  {
                    marginTop: item.id == 1 ? 10 : 20,
                  },
                ]}
              >
                <View>
                  <View>
                    <View style={styles.popularTopWrapper}>
                      <MaterialCommunityIcons
                        name="crown"
                        size={12}
                        color={colors.primary}
                      />
                      <Text style={styles.popularTopText}>Top of the week</Text>
                    </View>
                    <View style={styles.popularTitlesWrapper}>
                      <Text style={styles.popularTitlesTitle}>
                        {item.title}
                      </Text>
                      <Text style={styles.popularTitlesWeight}>
                        Weight {item.weight}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.popularCarBottom}>
                    <View style={styles.addPizzaButton}>
                      <Feather name="plus" size={10} color={colors.textDark} />
                    </View>
                    <View style={styles.ratingWrapper}>
                      <MaterialCommunityIcons
                        name="star"
                        size={10}
                        color={colors.textDark}
                      />
                      <Text style={styles.rating}>{item.rating}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.popularCardRight}>
                  <Image style={styles.popularCardIamge} source={item.image} />
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  titlesWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  titlesSubtitles: {
    fontSize: 16,
    color: colors.textDark,
  },
  stylesTitle: {
    fontSize: 32,
    color: colors.textDark,
    marginTop: 5,
  },
  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 30,
  },
  search: {
    flex: 1,
    marginLeft: 10,
    borderBottomColor: colors.textDark,
    borderBottomWidth: 2,
  },
  searchText: {
    fontSize: 14,
    marginBottom: 5,
    color: colors.textLight,
  },
  catagoriesWrapper: {
    marginTop: 30,
  },
  catagoriesTitle: {
    fontSize: 16,
    paddingHorizontal: 20,
  },
  catagoriesListWrapper: {
    paddingTop: 15,
    paddingBottom: 20,
  },
  catagoryItemWrapper: {
    backgroundColor: "#F5CA48",
    marginRight: 20,
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 10,
  },
  catagoryItemImage: {
    width: 60,
    height: 60,
    marginTop: 24,
    alignSelf: "center",
    marginHorizontal: 20,
  },
  catagoryItemTitle: {
    textAlign: "center",
    fontSize: 14,
    marginTop: 10,
  },
  catagorySelectWrapper: {
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
    width: 26,
    height: 26,
    borderRadius: 26,
    marginBottom: 20,
  },
  catagorySelectIcon: {
    alignSelf: "center",
  },
  popularWrapper: {
    paddingHorizontal: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 10,
  },
  popularTitle: {
    fontSize: 16,
  },
  popularCardWrapper: {
    backgroundColor: colors.white,
    borderRadius: 25,
    paddingTop: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    overflow: "hidden",
  },
  popularTopWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  popularTopText: {
    marginLeft: 10,
    fontSize: 14,
  },
  popularTitlesWrapper: {
    marginTop: 20,
  },
  popularTitlesTitle: {
    fontSize: 14,
    color: colors.textDark,
  },
  popularTitlesWeight: {
    fontSize: 12,
    color: colors.textLight,
    marginTop: 5,
  },
  popularCarBottom: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginLeft: -20,
  },
  addPizzaButton: {
    backgroundColor: colors.primary,
    padding: 40,
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  ratingWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
  },
  rating: {
    fontSize: 12,
    color: colors.textDark,
    marginLeft: 5,
  },
  popularCardRight: {
    marginLeft: 40,
  },
  popularCardIamge: {
    width: 210,
    height: 125,
    resizeMode: "contain",
  },
});
