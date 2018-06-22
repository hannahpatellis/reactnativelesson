//
// ─── REACT NATIVE COMPONENTS ────────────────────────────────────────────────────
//

// Students: Use what we know about react state
// to increase a count property
// when the user touches/clicks any of the TouchableOpacity components
// ==========================

import React from 'react';
// TODO: Import the react-native button component
//       that will change opacity when clicked
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
    // TODO: Setup a state that includes a count property that starts at 0

    handlePress = () => {
        // TODO: In this handlePress method that we created ourselves
        //      take the count property in the state we just made
        //      and increase it by one
    }

  // TODO: In each TouchableOpacity component
  //       add an onPress attribute that triggers the handlePress
  //       method we made above
  // HINT: The count state is already referenced in the <Text>
  //       components
  render() {
    return (
      /* Container for all rows */
      <View style={styles.container}>

        {/* Row 1 */}
        <View style={styles.row}>

          <TouchableOpacity  style={styles.box}>
            <Text style={styles.text}>{this.state.count}</Text>
          </TouchableOpacity>

          <TouchableOpacity  style={styles.box}>
            <Text style={styles.text}>{this.state.count}</Text>
          </TouchableOpacity>

          <TouchableOpacity  style={styles.box}>
            <Text style={styles.text}>{this.state.count}</Text>
          </TouchableOpacity>

          <TouchableOpacity  style={styles.box}>
            <Text style={styles.text}>{this.state.count}</Text>
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