import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import { Avatar, Button } from "react-native-paper";
import { useState } from "react";

const Home = () => {
  const categories = [
    { category: "Nice", _id: "sadri" },
    { category: "Nice2", _id: "sadri2" },
    { category: "Nice3", _id: "sadri3" },
    { category: "Nice4", _id: "sadri4" },
    { category: "Nice5", _id: "sadri5" },
    { category: "Nice6", _id: "sadri6" },
    { category: "Nice7", _id: "sadri7" },
    { category: "Nice8", _id: "sadri8" },
    { category: "Nice9", _id: "sadri9" },
  ];

  const [category, setCategory] = useState("");
  const categoryButtonHandler = (id) => {
    setCategory(id);
  };
  console.log(category);

  return (
    <View style={defaultStyle}>
      <Header />

      {/* Headiing Row */}
      <View
        style={{
          paddingTop: 70,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/*Headling*/}
        <View>
          <Text style={{ fontSize: 25 }}>Our</Text>
          <Text style={{ fontSize: 25, fontWeight: "900" }}>Products</Text>
        </View>

        {/* Search Bar */}
        <View>
          <TouchableOpacity>
            <Avatar.Icon
              icon={"magnify"}
              size={50}
              color={"gray"}
              style={{ backgroundColor: colors.color2, elevation: 20 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Categories */}

      <View
        style={{
          flexDirection: "row",
          height: 80,
        }}
      >
        <ScrollView
          horizontal
          contentContainerStyle={{ alignItems: "center" }}
          showsHorizontalScrollIndicator={false}
        >
          {categories.map((item, index) => (
            <Button
              key={item._id}
              style={{
                backgroundColor:
                  category === item._id ? colors.color1 : colors.color5,
                borderRadius: 100,
                margin: 5,
              }}
              onPress={() => {
                categoryButtonHandler(item._id);
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: category === item._id ? colors.color2 : "gray",
                }}
              >
                {item.category}
              </Text>
            </Button>
          ))}
        </ScrollView>
      </View>
      {/* Products */}
    </View>
  );
};

export default Home;
