import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const SplashPhotoSkins = () => {
  return (
    <View style={styles.splashPhotoSkins}>
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/dim.png")}
      />
      <Image
        style={styles.introNotifications}
        contentFit="cover"
        source={require("../assets/intro--notifications.png")}
      />
      <View style={styles.buttonLarge}>
        <View style={styles.rectangle} />
        <View style={styles.colorBluePosition}>
          <View style={[styles.rectangle1, styles.colorBluePosition]} />
        </View>
        <Text style={styles.button}>Next</Text>
      </View>
      <Text style={styles.skip}>
        <Text style={styles.skip1}>{`Skip `}</Text>
        <Text style={styles.text}>→</Text>
      </Text>
      <View style={[styles.rectangle2, styles.rectangleLayout]} />
      <View style={styles.rectangle3} />
      <View style={[styles.rectangle4, styles.rectangleLayout]} />
      <Text style={[styles.addSomePersonality, styles.takePhotosAndPosition]}>
        Add some personality to your shots
      </Text>
      <Text style={[styles.takePhotosAnd, styles.takePhotosAndPosition]}>
        TAKE PHOTOS AND ADD EXCLUSIVE PHOTO FRAMES
      </Text>
      <View
        style={[
          styles.deviceBezelsIphonexsDis,
          styles.deviceBezelsIphonexsDisLayout,
        ]}
      >
        <Image
          style={[
            styles.forReferenceDisplayShape,
            styles.deviceBezelsIphonexsDisLayout,
          ]}
          contentFit="cover"
          source={require("../assets/for-reference--display-shape.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  colorBluePosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  rectangleLayout: {
    opacity: 0.25,
    height: 8,
    width: 8,
    backgroundColor: Color.colorGray_100,
    top: 674,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  takePhotosAndPosition: {
    left: 16,
    textAlign: "left",
    color: Color.colorWhite,
    letterSpacing: 1,
    position: "absolute",
  },
  deviceBezelsIphonexsDisLayout: {
    width: 375,
    position: "absolute",
    height: 812,
  },
  groupIcon: {
    top: -1,
    left: -326,
    width: 1231,
    height: 820,
    opacity: 0.75,
    position: "absolute",
  },
  introNotifications: {
    top: 310,
    left: 81,
    width: 214,
    height: 250,
    position: "absolute",
  },
  rectangle: {
    backgroundColor: Color.colorGray_200,
    borderStyle: "solid",
    borderColor: Color.colorSteelblue,
    borderWidth: 1,
    borderRadius: Border.br_5xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  rectangle1: {
    backgroundColor: Color.colorSteelblue,
  },
  button: {
    marginTop: -9,
    lineHeight: 24,
    fontFamily: FontFamily.gilroy,
    color: Color.colorGray_100,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 19,
    letterSpacing: 1,
    fontSize: FontSize.size_base,
    top: "50%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  buttonLarge: {
    top: 714,
    left: 32,
    width: 311,
    height: 50,
    position: "absolute",
  },
  skip1: {
    fontFamily: FontFamily.tradeGothicLTLight,
  },
  text: {
    fontFamily: FontFamily.lucidaGrande,
  },
  skip: {
    top: 48,
    left: 278,
    fontSize: 14,
    textAlign: "left",
    color: Color.colorWhite,
    letterSpacing: 1,
    position: "absolute",
  },
  rectangle2: {
    left: 132,
  },
  rectangle3: {
    left: 180,
    height: 8,
    width: 8,
    backgroundColor: Color.colorGray_100,
    top: 674,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  rectangle4: {
    left: 228,
  },
  addSomePersonality: {
    top: 119,
    fontWeight: "300",
    fontFamily: FontFamily.tradeGothicLT,
    opacity: 0.5,
    fontSize: FontSize.size_base,
    left: 16,
  },
  takePhotosAnd: {
    top: 152,
    fontSize: 20,
    lineHeight: 32,
    fontFamily: FontFamily.trendHMSansOne,
    width: 343,
    height: 108,
  },
  forReferenceDisplayShape: {
    marginTop: -406,
    marginLeft: -187.5,
    left: "50%",
    top: "50%",
    width: 375,
  },
  deviceBezelsIphonexsDis: {
    top: 0,
    left: 0,
  },
  splashPhotoSkins: {
    backgroundColor: "#000",
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
  },
});

export default SplashPhotoSkins;
