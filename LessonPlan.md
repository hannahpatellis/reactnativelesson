### 0: Introduce Flexbox
- Slack out this link: https://css-tricks.com/snippets/css/a-guide-to-flexbox/

Flexbox Layout (or flexible box) module is a way to more efficiently layout, align, and distribute space among ITEMS inside a FLEXBOX CONTAINER.

The major concept behind flexbox is that the container has the ability to alter its items' width/height and order to best fill available space.

The way our layouts become incredibly responsive. It also lends itself to mobile apps well because there are so many different sized devices and space is very important on a device screen.

- Go over the different flex behaviors using the presentation

- Have them play https://flexboxfroggy.com/

### 1: Student Do: Setup Expo
- Have students download the Expo Client app on their phones and the Expo XDE (https://github.com/expo/xde/releases)
- Have them create user accounts

### 2: Student Do: Creating a new project
- Have students create a new Expo project 
    - Explain this is making a new folder with all our boilerplate React Native code
    - It's like create-react-app for React Native

### 3: Instructor Do: Walk through the boilerplate files

### 4: Student Do: Flex1
- Have students follow the directions inside 01-flex1

### 5: Instructor Do: Review Flex1

### 6: Student Do: Flex 2 continued
- 02-flex2

### 7: Inst Do: Review Flex2

### 8: Inst Do: Explain TouchableOpacity
- Touchable Opacity is going to be React Native's way of allowing touchable buttons

- A wrapper for making views respond properly to touches. On press down, the opacity of the wrapped view is decreased, dimming it.

- This can take an "onPress" action

https://facebook.github.io/react-native/docs/touchableopacity.html

### 9: Inst Do: Explain how TouchableOpacity can take in an onPress

- Create a state
- Create a handlePress method
- Assign onPress={this.handlePress}
- Have handlePress make an alert

### 10: Instructor Do: Talk about ScrollView

- ScrollView allows us to scroll through an area, it needs to be nested inside a <View> with a specific height
- We can use Dimension to get the phone's dimensions and do math with them

https://facebook.github.io/react-native/docs/scrollview.html

### 11: Student Do: Scroll View
- 04-scrollView

### 12: Instructor Do: Scroll View

### 13: Student Do: Form

### 14: Instructor Do: Form

### 15: Instructor Explain: Movie Search App

### 16: Students look over Movie Search App