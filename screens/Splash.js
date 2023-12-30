import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const Splash = () => {
  return (
    <View style={styles.splash}>
      <Image
        style={styles.d2535Icon}
        contentFit="contain"
        source={require("../assets/dim.png")}
      />
      {/* <View style={[styles.mask, styles.maskLayout]} /> */}
      <Image
        style={styles.imageLogo}
        contentFit="contain"
        source={require("../assets/image--logo.png")}
      />
      {/* <View style={[styles.deviceBezelsIphonexsDis, styles.maskLayout]}>
        <Image
          style={[styles.forReferenceDisplayShape, styles.maskLayout]}
          contentFit="cover"
          source={require("../assets/for-reference--display-shape.png")}
        /> 
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  maskLayout: {
    width: 375,
    position: "absolute",
    height: 812,
  },
  d2535Icon: {
    flex:1,
    width: '100%',
    height: '100%', 
    resizeMode: 'cover', 
    position: 'absolute',
    top: 0,
    left: 0,
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  mask: {
    backgroundColor: "rgba(55, 53, 53, 0.75)",
    left: 0,
    top: 0,
    width: 375,
  },
  imageLogo: {
    top: 320,
    left: 110,
    width: 200,
    height: 171,
    position: "absolute",
  },
  // forReferenceDisplayShape: {
  //   marginTop: -406,
  //   marginLeft: -187.5,
  //   top: "50%",
  //   left: "50%",
  // },
  // deviceBezelsIphonexsDis: {
  //   left: 0,
  //   top: 0,
  //   width: 375,
  // },
  splash: {
    backgroundColor: "#373535",
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 812,
  },
});

export default Splash;
