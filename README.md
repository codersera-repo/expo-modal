Installation

`npm install expo-modal --save`

**Background**

In browser css, we have display style attribute and it has the following possible values
- static
- relative
- absolute
- fixed

But in react-native `fixed` is missing which essentially means that you can't have an element with the display:fixed styling.
You can have `absolute` but as you know `absolute` puts the element relative to the parent and not to the window.

Now, what if you have a use case. Like if you have a modal, which covers the full screen. 
This is not possible with react-native.

To solve that problem, you can add a element at the top of the tree, and tweak its visibility through react.

This library does the exact same thing.

One more thing to note here is that, in android, the zIndex behaves differently and it is important to have the element render at the last if you want it to come on the top of the UI.

**Usage**

In your entry app.js file add Modal component.

```
/*App.js*/

import (wrapIntoModal} from 'expo-modal';

export default class App extends React.Component {

  render() {

    return
        wrapIntoModal(<View style={styles.container}>
          {/*other components*/}
        </View>)
  }
     
}

```

Now in the component, where you want to display the modal, simply call showModal(yourComponent). `yourComponent` will be shown in the center of your modal.

You can always tweak the styling by passing containerStyle props.

**Full example** 

```import React from 'react';
   import {Video} from 'expo';
   import {Dimensions, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from 'react-native';
   import {dismissModal, Modal, showModal, wrapIntoModal} from 'expo-modal';
   
   const {height, width} = Dimensions.get('window');
   
   export default class App extends React.Component {
   
       render() {
   
           // innerComponent is the one that'll be displayed within the modal, you have full control of its styling.
           const innerComponent = <View style={{height: height/2 , width: width, justifyContent: 'center', alignItems: 'center'}}>
               <Text>Hello world</Text>
               <TouchableOpacity onPress={() => dismissModal()} ><Text>close modal</Text></TouchableOpacity>
           </View>;
   
           const appContainer = <View style={styles.container}>
               <Video
                   source={{uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}}
                   shouldPlay={true}
                   resizeMode="cover"
                   style={styles.videoPlayer}
               />
               <TouchableHighlight
                   onPress={() => {showModal(innerComponent)}}
               >
                   <Text> Touch Here </Text>
               </TouchableHighlight>
           </View>;
   
           return wrapIntoModal(appContainer, {{backgroundColor: 'blue'}})
       }
   }
   
   const styles = StyleSheet.create({
       container: {
           flex: 1,
           backgroundColor: '#fff',
           alignItems: 'center',
           justifyContent: 'center',
       },
       videoPlayer: {
           position: 'relative',
           width: '100%',
           aspectRatio:3/2,
       },
   });

```
