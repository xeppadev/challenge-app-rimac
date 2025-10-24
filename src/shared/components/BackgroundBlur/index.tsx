import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, View } from "react-native";

export const BackgroundBlur: React.FC = () => {
  return (
    <View style={styles.container} pointerEvents="none">
      {/* Blur circular morado en la parte inferior izquierda */}
      <LinearGradient
        colors={["rgba(196, 174, 255, 0.7)", "rgba(196, 174, 255, 0)"]}
        style={[styles.blob, styles.blob1]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
      />

      {/* Blur circular celeste/turquesa en la parte inferior derecha */}
      <LinearGradient
        colors={["rgba(137, 255, 235, 0.6)", "rgba(137, 255, 235, 0)"]}
        style={[styles.blob, styles.blob2]}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    overflow: "hidden",
    pointerEvents: "none",
  },
  blob: {
    position: "absolute",
    borderRadius: 9999,
  },
  blob1: {
    width: 350,
    height: 350,
    bottom: -120,
    left: -120,
  },
  blob2: {
    width: 320,
    height: 320,
    top: -100,
    right: -100,
  },
});
