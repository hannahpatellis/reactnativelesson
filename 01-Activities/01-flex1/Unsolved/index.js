//
// ─── STYLE EXERCISE 1 ───────────────────────────────────────────────────────────
//

// Students: Make this app's layout
// reflect the design in layout1.jpg
// =================================

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      // TODO:
      // ====
      // Place the proper style objects in the style prop.
      // Keep in mind that View will need two style objects.
      // Use an array to select multiple styles!
      <View style=>
        <View style=>
          <Text style=>Header</Text>
        </View>
        <View style=>
          <Text style=>Body</Text>
        </View>
        <View style=>
          <Text style=>Footer</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  // Container Element
  container: {
    // We set flex to 1 since it's taking up the whole screen
    flex: 1,
    marginTop: 20 // Some extra margin up top to keep header content our to statusbar (only iOS needs this)
  },

  // All boxes get crimson colors.
  box: {
    backgroundColor: 'crimson'
  },

  // NOTE: Flex works on a ratio system.
  // All of the child flex elements add up to eight,
  // so all elements will take up a portion of the screen
  // equal to their flex value divided by the total.
  // In this case: 2/8, 5/8 and 1/8.
  
  // Header styles
  header: {

    // TODO:
    // ====
    // Set the proper flex and margin values

    alignItems: 'center', // Center elements horizontally.
    justifyContent: 'center' // Center elements vertically.
  },

  // Body styles
  body: {

    // TODO:
    // ====
    // Set the proper flex and margin values

    alignItems: 'center', // Center elements horizontally.
    justifyContent: 'center' // Center elements vertically.
  },

  // Footer styles
  footer: {

    // TODO:
    // ====
    // Set the proper flex and margin values

    alignItems: 'center', // Center elements horizontally.
    justifyContent: 'center' // Center elements vertically.
  },

  // Text styles
  text: {
    color: 'white',
    fontSize: 24
  }
});