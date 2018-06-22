//
// ─── STYLE 2 ────────────────────────────────────────────────────────────────────
//

// Students: Make this app's layout
// reflect the design in layout2.jpg
// =================================

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

  // TODO
  // ====
  // Complete the following render method
  // by nesting View components with 'row' and 'box' styles.

  render() {
    return (
      /* Container for all rows */
      <View style={styles.container}>

        {/* Row 1 */}
          {/* Four boxes */}
          <View style={styles.row}>
            <View style={styles.box}>
              <Text style={styles.text}>X</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.text}>X</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.text}>X</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.text}>X</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.text}>X</Text>
            </View>
          </View>

        {/* Row 2 */}
          {/* Four boxes */}
          <View style={styles.row}>
            <View style={styles.box}>
              <Text style={styles.text}>X</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.text}>X</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.text}>X</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.text}>X</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.text}>X</Text>
            </View>
          </View>

        {/* Row 3 */}
          {/* Four boxes */}
          <View style={styles.row}>
            <View style={styles.box}>
              <Text style={styles.text}>X</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.text}>X</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.text}>X</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.text}>X</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.text}>X</Text>
            </View>
          </View>

        {/* Row 4 */}
          {/* Four boxes */}

        {/* Row 5 */}
          {/* Four boxes */}

        {/* Row 6 */}
          {/* Four boxes */}

        {/* Row 7 */}
          {/* Four boxes */}

      </View>
    );
  }
}

const styles = StyleSheet.create({

  // We set flex to 1 since it's taking up the whole screen.
  container: {
    flex: 1
  },

  row: {
    // TODO:
    // ====
    // Set flex and flex direction to their proper values.
    flex: 1,
    flexDirection: "row"
  },

  // Box styles.
  box: {
    backgroundColor: 'crimson',
    flex: 1,
    margin: 10,
    alignItems: "center",
    justifyContent: "space-around"
    // TODO:
    // ====
    // Set the proper values for flex, margin, 
    // alignItems and justifyContent.
  },

  // Text styles.
  text: {
    color: 'white',
    fontSize: 24
  }
});