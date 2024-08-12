import { BlurView } from "expo-blur";
import React from "react";
import { ScrollView, ImageBackground } from "react-native";
import Animated, { SlideInLeft } from "react-native-reanimated";
import "./index.css";

const Home = () => {
  const components = Array.from({ length: 30 }).map((_, index) => (
    <BlurView
      intensity={50}
      tint="dark"
      style={{
        width: 300,
        height: 300,
        borderRadius: 10,
        paddingTop: 10,
        margin: 10,
      }}
    >
      <Animated.View
        key={index}
        entering={SlideInLeft.duration(450).delay(index * 30)}
      >
        <Animated.Text style={{ color: "white" }}>Home page</Animated.Text>
        <Animated.Text>COUCOU</Animated.Text>
      </Animated.View>
    </BlurView>
  ));

  return (
    <ImageBackground
      source={{
        uri: "https://cdn.britannica.com/13/234213-050-45F47984/dachshund-dog.jpg",
      }}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Animated.View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {components}
        </Animated.View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Home;
