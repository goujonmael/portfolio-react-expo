import { View, Platform, Text, Pressable, StyleSheet } from "react-native";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { BlurView } from "expo-blur";
import Animated, {
  SharedTransition,
  SlideInLeft,
  withSpring,
} from "react-native-reanimated";
import StoreContextProvider, { StoreContext } from "../app/StoreContext";
import { useContext, useEffect } from "react";

export default function Modal() {
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

  const toggleModal = () => {
    if (isModalVisible) {
      hideModal();
      updateAnimateHomeCards(false);
      router.push("/");
    } else {
      showModal();
    }
  };

  return isModalVisible ? (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BlurView
        intensity={50}
        tint="dark"
        style={{
          width: "60%",
          height: "60%",
          borderRadius: 10,
          margin: 10,
        }}
      >
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Pressable onPress={toggleModal} style={styles.pressable}>
            X
          </Pressable>
          <Text>You have selected the item number {getSelectedItem()}</Text>
          <Text>HELLO FROM THE MODAL</Text>
          
        </View>
      </BlurView>
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  // set in in the top right corner
  pressable: {
    position: "absolute",
    top: 0,
    right: 0,
    margin: 10,
  },
});
