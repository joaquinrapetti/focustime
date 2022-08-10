import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView, Platform } from "react-native";

import { colors } from "./src/utils/colors";
import Focus from "./src/features/Focus";
import FocusHistory from "./src/features/FocusHistory";
import Timer from "./src/features/Timer";

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  const [history, setHistory] = useState(["Temperature control"]);

  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
          <Focus addSubject={setCurrentSubject} />
          <FocusHistory history={history} />
        </>
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={(subject) => {
            setHistory([...history, subject]);
          }}
          clearSubject={() => {
            setCurrentSubject(null);
          }}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // SafeAreaView only works for IOS
    // Need to use as a view container with Platform android options
    paddingTop: Platform.OS === "android" ? 50 : 0,
    backgroundColor: colors.darkBlue,
  },
  text: {
    color: colors.white,
  },
});
