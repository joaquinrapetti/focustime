import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

import { colors } from "../utils/colors";
import { spacing } from "../utils/sizes";
import RoundedButton from "../components/RoundedButton";

const Focus = ({ addSubject }) => {
  // State manage subject Input
  const [subject, setSubject] = useState(null);

  //   const onChangeHandler = (text) => {};
  console.log(subject);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          label="What would you like to focus on?"
          // onChangeEvent to update Subject info
          onChangeText={setSubject}
        />
        <View style={styles.button}>
          <RoundedButton
            title="+"
            size={50}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  button: {
    justifyContent: "center",
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: "top",
    flexDirection: "row",
  },
  text: {
    color: colors.white,
  },
});

export default Focus;
