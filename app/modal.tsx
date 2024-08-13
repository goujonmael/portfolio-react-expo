import { View, Platform, Text, Pressable } from "react-native";
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
  const { isModalVisible, showModal, hideModal } = useContext(StoreContext);

  const toggleModal = () => {
    if (isModalVisible) {
      hideModal();
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
          paddingTop: 10,
          margin: 10,
        }}
      >
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>HELLO FROM THE MODAL</Text>
          <Pressable onPress={toggleModal}>
            <Link href="/" className="nav-link">
              Close
            </Link>
          </Pressable>
        </View>
      </BlurView>
    </View>
  ) : null;
}