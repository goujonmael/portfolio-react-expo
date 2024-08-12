import { View, Platform, Text } from "react-native";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { BlurView } from "expo-blur";
import Animated, { SharedTransition, SlideInLeft, withSpring } from "react-native-reanimated";

const transition = SharedTransition.custom((values) => {
    'worklet';
    return {
      height: withSpring(values.targetHeight),
      width: withSpring(values.targetWidth),
    };
  });

export default function Modal() {
  // If the page was reloaded or navigated to directly, then the modal should be presented as
  // a full screen page. You may need to change the UI to account for this.
  const isPresented = router.canGoBack();
  return (
    <BlurView
      intensity={50}
      tint="dark"
      style={{
        width: "100%",
        height: "100%",
        borderRadius: 10,
        paddingTop: 10,
        margin: 10,
      }}
    >
      <Animated.View sharedTransitionStyle={transition} sharedTransitionTag="sharedTag" style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {/* Use `../` as a simple way to navigate to the root. This is not analogous to "goBack". */}
        {!isPresented && <Link href="../">Dismiss</Link>}
        {/* Native modals have dark backgrounds on iOS. Set the status bar to light content and add a fallback for other platforms with auto. */}
        <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
        <Text>HELLO FROM THE MODAL</Text>
        <Link href="/" className="nav-link">Close</Link>
      </Animated.View>
    </BlurView>
  );
}