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


**Usage**

In your entry app.js file add Modal component.

```
/*App.js*/

import (Modal} from 'expo-modal';

export default class App extends React.Component {

  render() {

    return (
        <View style={styles.container}>
          <Modal/>
          
          {/*other components*/}
        </View>  
          )
     }
     
}

```

Now in the component, where you want to display the modal, simply call showModal(yourComponent). `yourComponent` will be shown in the center of your modal.

You can always tweak the styling by passing containerStyle props.

**Full example** 

```import React from 'react';
   import {Video} from 'expo';
   import {StyleSheet, Text, View, TouchableHighlight, Dimensions, TouchableOpacity} from 'react-native';
   import codegen from 'codegen.macro';
   import {dismissModal, Modal, showModal} from 'expo-modal';
   
   // TODO: make it using export instead of require
   const DeviceInfo = codegen`
     if(process.env.EJECTED==='true') {
       module.exports = 'require("react-native-device-info").default;'
     } else {
       module.exports = 'require("./mocks/DeviceInfoMock").default;'
     }
   `;
   
   const {height, width} = Dimensions.get('window');
   
   export default class App extends React.Component {
   
     render() {
   
       const innerComponent = <View style={{height: height/2 , width: width, justifyContent: 'center', alignItems: 'center'}}>
         <Text>Hello world</Text>
         <TouchableOpacity onPress={() => dismissModal()} ><Text>close modal</Text></TouchableOpacity>
       </View>
   
       return (
           <View style={styles.container}>
             <Modal/>
   
             <Text>{DeviceInfo.getBrand()}</Text>
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
           </View>
       );
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