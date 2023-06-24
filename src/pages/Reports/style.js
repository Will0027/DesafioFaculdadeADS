import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  button: {
    marginBottom: 16,
    padding: 10,
    backgroundColor: "#4CAF50",
    borderRadius: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  emptyText: {
    marginTop: 16,
    fontSize: 18,
    fontStyle: "italic",
  },
  reportItem: {
    marginBottom: 8,
    padding: 16,
    backgroundColor: "#EFEFEF",
    borderRadius: 5,
  },
  reportTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 8,
  },
});
