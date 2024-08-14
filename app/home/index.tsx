import { BlurView } from "expo-blur";
import React, { useContext, useEffect } from "react";
import {
  ImageBackground,
  View,
  Text,
  ScrollView,
  Button,
  StyleSheet,
  Image,
} from "react-native";
import Animated, { SlideInLeft } from "react-native-reanimated";
import { FlatList, Pressable } from "react-native-gesture-handler";
import { isMobile } from "react-device-detect";
import "./index.css";
import StoreContextProvider, { StoreContext } from "../StoreContext";
import { router } from "expo-router";

const Home = () => {
  const {
    isModalVisible,
    showModal,
    hideModal,
    getSelectedItem,
    updateSelectedItem,
    animateHomeCards,
    setAnimateHomeCards,
    updateAnimateHomeCards,
  } = useContext(StoreContext);
  const data = Array.from({ length: 30 }).map((_, index) => ({
    key: `${index}`,
  }));

  const toggleModal = () => {
    if (isModalVisible) {
      hideModal();
      router.push("/");
    } else {
      showModal();
      router.push("/modal");
    }
  };

  useEffect(() => {
    if (isModalVisible) {
      hideModal();
    }
  }, []);

  const renderItem = ({ item, index }) => (
    <Animated.View
      key={item.key}
      entering={animateHomeCards ? SlideInLeft : undefined}
    >
      <BlurView intensity={50} tint="dark" style={styles.container}>
        <Text style={styles.text}>Home page</Text>
        <Button
          onPress={() => {
            updateSelectedItem(index);
            toggleModal();
          }}
          title="Press Me"
        />
        <Image
          source={{
            uri: "https://cdn.britannica.com/13/234213-050-45F47984/dachshund-dog.jpg",
          }}
          style={{ width: 100, height: 100 }}
        />
        <Text style={styles.text}>Index : {index}</Text>
      </BlurView>
    </Animated.View>
  );

  return (
    <>
      <Text>Modal status :</Text>
      <Text>{isModalVisible ? "Visible" : "Hidden"}</Text>
      <Text>Selected item :</Text>
      <Text>{getSelectedItem()}</Text>
      <ImageBackground
        source={{
          uri: "https://cdn.britannica.com/13/234213-050-45F47984/dachshund-dog.jpg",
        }}
        style={{ flex: 1 }}
      >
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
      </ImageBackground>
    </>
  );
  updateAnimateHomeCards(true);
};

const styles = StyleSheet.create({
  pressable: {
    flex: 1,
    minHeight: 250,
    minWidth: 150,
    margin: 5,
    cursor: "pointer",
  },
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    width: 200,
    height: 300,
    borderRadius: 10,
    paddingTop: 10,
    margin: 10,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});

export default Home;
