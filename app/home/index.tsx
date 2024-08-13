import { BlurView } from "expo-blur";
import React, { useContext } from "react";
import { ImageBackground, View, Text, ScrollView, Button } from "react-native";
import Animated, { SlideInLeft } from "react-native-reanimated";
import { FlatList } from "react-native-gesture-handler";
import { isMobile } from "react-device-detect";
import "./index.css";
import StoreContextProvider, { StoreContext } from "../StoreContext";

const Home = () => {
  const { isModalVisible, showModal, hideModal } = useContext(StoreContext);
  const data = Array.from({ length: 30 }).map((_, index) => ({
    key: `${index}`,
  }));

  const renderItem = ({ item, index }) => (
    <Animated.View
      key={item.key}
      entering={SlideInLeft.duration(450).delay(index * 30)}
    >
      {isMobile ? (
        <BlurView
          intensity={50}
          tint="dark"
          style={{
            width: 300,
            height: 100,
            borderRadius: 10,
            paddingTop: 10,
            margin: 10,
          }}
        >
          <Text style={{ color: "white" }}>Home page</Text>
          <Text>COUCOU</Text>
        </BlurView>
      ) : (
        <BlurView
          intensity={50}
          tint="dark"
          style={{
            width: 600,
            height: 300,
            borderRadius: 10,
            paddingTop: 10,
            margin: 10,
          }}
        >
          <Text style={{ color: "white" }}>Home page</Text>
          <Text>COUCOU</Text>
        </BlurView>
      )}
    </Animated.View>
  );

  return (
    <>
      <ImageBackground
        source={{
          uri: "https://cdn.britannica.com/13/234213-050-45F47984/dachshund-dog.jpg",
        }}
        style={{ flex: 1 }}
      >
        {isMobile ? (
          <FlatList
            data={data}
            renderItem={renderItem}
            contentContainerStyle={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        ) : (
          <ScrollView
            contentContainerStyle={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {data.map((item, index) => renderItem({ item, index }))}
          </ScrollView>
        )}
      </ImageBackground>
    </>
  );
};

export default Home;
