import { Stack } from "expo-router";
import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "./_layout.css";

export default function Layout() {
  return (
    <>
      <Header />
      <Stack
        screenOptions={{
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerShown: false,
        }}
      >
        {/* Optionally configure static options outside the route.*/}
        <Stack.Screen name="home" options={{}} />
        <Stack.Screen
          name="modal"
          options={{
            // Set the presentation mode to modal for our modal route.
            presentation: "containedTransparentModal",
          }}
        />
      </Stack>

      <Footer />
    </>
  );
}
