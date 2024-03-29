//
// ─── REACT NATIVE COMPONENTS ────────────────────────────────────────────────────
//

// Students: Look through the react documentation
// for the component that will change opacity
// when the user touches/clicks it.
// ==========================

import React from 'react';
// TODO: Import the react-native button component
//       that will change opacity when clicked
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends React.Component {

  // TODO: replace all Views with the 'box' style
  //       with the component you imported.
  render() {
    return (
      /* Container for all rows */
      <View style={styles.container}>

        {/* Row 1 */}
        <View style={styles.row}>

          <TouchableOpacity style={styles.box}>
            <Text style={styles.text}>1</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box}>
            <Text style={styles.text}>2</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box}>
            <Text style={styles.text}>3</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box}>
            <Text style={styles.text}>4</Text>
          </TouchableOpacity>
        </View>

        {/* Row 2 */}
        <View style={styles.row}>

          <TouchableOpacity style={styles.box}>
            <Text style={styles.text}>5</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box}>
            <Text style={styles.text}>6</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box}>
            <Text style={styles.text}>7</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box}>
            <Text style={styles.text}>8</Text>
          </TouchableOpacity>
        </View>

        {/* Row 3 */}
        <View style={styles.row}>

          <TouchableOpacity style={styles.box}>
            <Text style={styles.text}>9</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box}>
            <Text style={styles.text}>10</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box}>
            <Text style={styles.text}>11</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box}>
            <Text style={styles.text}>12</Text>
          </TouchableOpacity>
        </View>

        {/* Row 4 */}
        <View style={styles.row}>

          <TouchableOpacity style={styles.box}>
            <Text style={styles.text}>13</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box}>
            <Text style={styles.text}>14</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box}>
            <Text style={styles.text}>15</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box}>
            <Text style={styles.text}>16</Text>
          </TouchableOpacity>
        </View>

        {/* Row 5 */}
        <View style={styles.row}>

          <TouchableOpacity style={styles.box}>
            <Text style={styles.text}>17</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box}>
            <Text style={styles.text}>18</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box}>
            <Text style={styles.text}>19</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box}>
            <Text style={styles.text}>20</Text>
          </TouchableOpacity>
        </View>

        {/* Row 6 */}
        <View style={styles.row}>

          <TouchableOpacity style={styles.box}>
            <Text style={styles.text}>25</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box}>
            <Text style={styles.text}>26</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box}>
            <Text style={styles.text}>27</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box}>
            <Text style={styles.text}>28</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  // We set flex to 1 since it's taking up the whole screen
  container: {
    flex: 1,
    marginTop: 20
  },

  // We set row to 1.
  // Each will be one-xth of the screen, 
  // with x being the number of rows in the app.
  // Since we have six rows, each will take up 1/6th of the screen.
  row: {
    flex: 1,
    flexDirection: 'row'
  },

  // Box styles
  // Box's flex also gets set to 1.
  // Since there's 4 elements in each row, each box is 1/4 of screen.
  // They'll be placed horizontally as per row's flex direction.
  box: {
    backgroundColor: 'crimson',
    flex: 1, 
    margin: 10,
    alignItems: 'center', // Center child elements horizontally.
    justifyContent: 'center' // Center child elements vertically.
  },

  // Text styles
  text: {
    color: 'white',
    fontSize: 24
  }
});