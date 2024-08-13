import { BlurView } from "expo-blur";
import React, { useContext } from "react";
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

const Home = () => {
  const {
    isModalVisible,
    showModal,
    hideModal,
    getSelectedItem,
    updateSelectedItem,
  } = useContext(StoreContext);
  const data = Array.from({ length: 30 }).map((_, index) => ({
    key: `${index}`,
  }));

  const renderItem = ({ item, index }) => (
    <>
      <Pressable
        style={styles.pressable}
        onPress={() => {
          updateSelectedItem(item.key);
        }}
      >
        <Text>Index : </Text>
        {isMobile ? (
          <Animated.View
            key={item.key}
            entering={SlideInLeft.duration(450).delay(index * 30)}
            style={styles.view}
          >
            <BlurView intensity={50} tint="dark" style={styles.containerMobile}>
              <Text style={styles.text}>Home page</Text>
              <Image
                source={{
                  uri: "https://cdn.britannica.com/13/234213-050-45F47984/dachshund-dog.jpg",
                }}
                style={{ width: 100, height: 100 }}
              />
              <Text style={styles.text}>Index : {index}</Text>
            </BlurView>
          </Animated.View>
        ) : (
          <Animated.View
            key={item.key}
            entering={SlideInLeft.duration(450).delay(index * 30)}
            style={styles.view}
          >
            <BlurView intensity={50} tint="dark" style={styles.container}>
              <Text style={styles.text}>Home page</Text>
              <Text style={styles.text}>COUCOU</Text>
            </BlurView>
          </Animated.View>
        )}
      </Pressable>
    </>
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

const styles = StyleSheet.create({
  pressable: {
    flex: 1,
    minHeight: 300,
    minWidth: 150,
    margin: 5,
  },
  view: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    width: 600,
    height: 300,
    borderRadius: 10,
    paddingTop: 10,
    margin: 10,
  },
  containerMobile: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    width: 150,
    height: 300,
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});

export default Home;
