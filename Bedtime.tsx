import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useSharedValue } from "react-native-reanimated";

import CircularSlider from "./CircularSlider";
import { PADDING } from "./Constants";
import Container from "./components/Container";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    padding: PADDING,
  },
  title: {
    // fontFamily: "SFProRounded-Semibold",
    fontSize: 36,
    color: "#fff",
    marginBottom: 32,
    fontWeight: "bold",
  },
});

const Bedtime = () => {
  const start = useSharedValue(0);
  const end = useSharedValue(1.5 * Math.PI);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <FontAwesome
            name="apple"
            size={40}
            color="white"
            style={{ marginRight: 10 }}
          />
          <Text style={styles.title}>Apple⚡</Text>
        </View>
        <Container start={start} end={end}>
          <CircularSlider start={start} end={end} />
        </Container>
        <Text style={{ color: "gray", fontSize: 20 }}>
          Set up Alarm the new way✅⚡
        </Text>
      </View>
    </GestureHandlerRootView>
  );
};

export default Bedtime;
