# react-native-flat-list

## Getting started

`$ npm install react-native-flat-list --save`

### Mostly automatic installation

`$ react-native link react-native-flat-list`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-flat-list` and add `FlatList.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libFlatList.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainApplication.java`
  - Add `import com.reactlibrary.FlatListPackage;` to the imports at the top of the file
  - Add `new FlatListPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-flat-list'
  	project(':react-native-flat-list').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-flat-list/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-flat-list')
  	```


## Usage
```javascript
import FlatList from 'react-native-flat-list';

// TODO: What to do with the module?
FlatList;
```
