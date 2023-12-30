import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const CreateAccount = () => {
  return (
    <View style={styles.createAccount}>
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/dim.png")}
      />
      <View style={[styles.modal, styles.modalLayout]} />
      <View style={[styles.formInputLabelPlacehol, styles.formLayout]}>
        <View style={styles.rectangle} />
        <Text style={[styles.errorMessage, styles.errorMessageClr]}>{` `}</Text>
        <Text style={styles.text}>{` `}</Text>
        <Text style={styles.input}>Email Address</Text>
        <Text style={[styles.label, styles.labelPosition]}>Email Address</Text>
        <Text style={[styles.text1, styles.text1Typo]}>􀅴</Text>
      </View>
      <View style={[styles.formInputLabelPlacehol1, styles.formLayout]}>
        <View style={styles.rectangle} />
        <Text style={[styles.errorMessage, styles.errorMessageClr]}>{` `}</Text>
        <Text style={styles.text}>{` `}</Text>
        <Text style={styles.input}>Full Name</Text>
        <Text style={[styles.label, styles.labelPosition]}>Full Name</Text>
        <Text style={[styles.text1, styles.text1Typo]}>{` `}</Text>
      </View>
      <View style={[styles.formInputLabelPlacehol2, styles.formLayout]}>
        <View style={styles.rectangle} />
        <Text style={[styles.errorMessage, styles.errorMessageClr]}>{` `}</Text>
        <Text style={styles.text}>{` `}</Text>
        <Text style={styles.input}>*******</Text>
        <Text style={[styles.label, styles.labelPosition]}>Password</Text>
        <Text style={[styles.text1, styles.text1Typo]}>{` `}</Text>
      </View>
      <View style={styles.buttonLarge}>
        <View style={[styles.rectangle3, styles.rectanglePosition]} />
        <View style={styles.rectanglePosition}>
          <View style={[styles.rectangle4, styles.rectanglePosition]} />
        </View>
        <Text style={[styles.button, styles.labelPosition]}>
          Create Account
        </Text>
      </View>
      <Text style={[styles.alreadyHaveAn, styles.text1Typo]}>
        Already have an account? Log In
      </Text>
      <View style={[styles.deviceBezelsIphonexsDis, styles.modalLayout]}>
        <Image
          style={[styles.forReferenceDisplayShape, styles.modalLayout]}
          contentFit="cover"
          source={require("../assets/for-reference--display-shape.png")}
        />
      </View>
      <Text style={[styles.createAccount1, styles.errorMessageClr]}>
        CREATE ACCOUNT
      </Text>
      <Text style={styles.savePreferencesGe}>
        Save preferences, get notifications
      </Text>
      <Text style={[styles.skipLoginContainer, styles.errorMessageClr]}>
        <Text style={styles.skipLogin}>{`Skip Login `}</Text>
        <Text style={styles.text6}>→</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  modalLayout: {
    width: 375,
    position: "absolute",
  },
  formLayout: {
    height: 111,
    width: 343,
    left: 16,
    position: "absolute",
  },
  errorMessageClr: {
    color: Color.colorWhite,
    letterSpacing: 1,
    position: "absolute",
  },
  labelPosition: {
    color: Color.colorGray_100,
    fontFamily: FontFamily.gilroy,
    fontSize: FontSize.size_base,
    top: "50%",
    letterSpacing: 1,
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  text1Typo: {
    color: Color.colorWhitesmoke,
    fontSize: FontSize.size_base,
    textAlign: "left",
    letterSpacing: 1,
    position: "absolute",
  },
  rectanglePosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  groupIcon: {
    top: -1,
    left: -326,
    width: 1231,
    height: 821,
    opacity: 0.75,
    position: "absolute",
  },
  modal: {
    top: 159,
    backgroundColor: Color.colorDarkslategray,
    height: 653,
    borderRadius: Border.br_5xs,
    left: 0,
    width: 375,
  },
  rectangle: {
    height: "54.05%",
    top: "26.13%",
    bottom: "19.82%",
    borderRadius: Border.br_11xs,
    backgroundColor: Color.colorWhitesmoke,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  errorMessage: {
    width: "92.42%",
    top: "85.59%",
    left: "7.58%",
    textAlign: "left",
    fontFamily: FontFamily.tradeGothicLT,
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
  },
  text: {
    marginTop: 39.5,
    fontFamily: FontFamily.sFCompactDisplay,
    color: Color.colorFirebrick,
    top: "50%",
    textAlign: "left",
    letterSpacing: 1,
    fontSize: FontSize.size_sm,
    left: "0%",
    position: "absolute",
  },
  input: {
    marginTop: -3.5,
    width: "95.04%",
    left: "5.1%",
    color: Color.colorDimgray_200,
    height: 21,
    fontFamily: FontFamily.gilroy,
    fontSize: FontSize.size_base,
    top: "50%",
    textAlign: "left",
    letterSpacing: 1,
    position: "absolute",
  },
  label: {
    height: 18,
    marginTop: -50.5,
    textAlign: "left",
  },
  text1: {
    left: "94.17%",
    fontFamily: FontFamily.sFProText,
    marginTop: -50.5,
    top: "50%",
  },
  formInputLabelPlacehol: {
    top: 336,
  },
  formInputLabelPlacehol1: {
    top: 209,
  },
  formInputLabelPlacehol2: {
    top: 463,
  },
  rectangle3: {
    backgroundColor: Color.colorGray_200,
    borderStyle: "solid",
    borderColor: Color.colorSteelblue,
    borderWidth: 1,
    borderRadius: Border.br_5xs,
  },
  rectangle4: {
    backgroundColor: Color.colorDimgray_100,
  },
  button: {
    marginTop: -9,
    lineHeight: 24,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 19,
  },
  buttonLarge: {
    top: 622,
    left: 195,
    width: 164,
    height: 50,
    opacity: 0.5,
    position: "absolute",
  },
  alreadyHaveAn: {
    top: 729,
    left: 60,
    fontFamily: FontFamily.tradeGothicLT,
  },
  forReferenceDisplayShape: {
    marginTop: -406,
    marginLeft: -187.5,
    left: "50%",
    top: "50%",
    height: 812,
  },
  deviceBezelsIphonexsDis: {
    top: 0,
    left: 0,
    width: 375,
    height: 812,
  },
  createAccount1: {
    top: 81,
    fontSize: 20,
    fontFamily: FontFamily.trendSansOne,
    textAlign: "left",
    color: Color.colorWhite,
    left: 16,
  },
  savePreferencesGe: {
    top: 109,
    fontWeight: "300",
    opacity: 0.8,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.tradeGothicLT,
    letterSpacing: 1,
    left: 16,
    position: "absolute",
  },
  skipLogin: {
    fontFamily: FontFamily.tradeGothicLTLight,
  },
  text6: {
    fontFamily: FontFamily.lucidaGrande,
  },
  skipLoginContainer: {
    top: 48,
    left: 271,
    textAlign: "right",
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
  },
  createAccount: {
    backgroundColor: "#000",
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
  },
});

export default CreateAccount;
