import React from "react";
import { Text, StyleSheet } from "react-native";
import theme from "./../theme";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.textPrimary,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorSecondary: {
    color: theme.colors.textSecondary,
  },
  bold: {
    fontWeight: theme.fontWeights.bold,
  },
  subheading: {
    fontSize: theme.fontSizes.subheading,
  },
  textAlignCenter: {
    textAlign: "center",
  },
  colorWhite:{
    background : theme.background.background,
  }
});

/*Exportamos una funcion la cual renderizara los 
datos y comparará si esta en uso o no el elemnto que se llame*/
export default function StyledText({
  children,
  color,
  textAlign,
  colorWhite,
  fontSize,
  fontWeights,
  style,
  ...restOfProps
}) {
  const textStyles = [
    styles.text,
    colorWhite === "white" && styles.colorWhite,
    textAlign === "center" && styles.textAlignCenter,
    color === "primary" && styles.colorPrimary,
    color === "secondary" && styles.colorSecondary,
    fontSize === "subheading" && styles.subheading,
    fontWeights === "bold" && styles.bold,
    style
  ];
  return (
    <Text style={textStyles} {...restOfProps}>
      {children}
    </Text>
  );
}
