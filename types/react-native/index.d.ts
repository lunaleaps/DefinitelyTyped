// Type definitions for react-native 0.71
// Project: https://github.com/facebook/react-native
// Definitions by: Eloy Durán <https://github.com/alloy>
//                 HuHuanming <https://github.com/huhuanming>
//                 Kyle Roach <https://github.com/iRoachie>
//                 Tim Wang <https://github.com/timwangdev>
//                 Kamal Mahyuddin <https://github.com/kamal>
//                 Alex Dunne <https://github.com/alexdunne>
//                 Manuel Alabor <https://github.com/swissmanu>
//                 Michele Bombardi <https://github.com/bm-software>
//                 Martin van Dam <https://github.com/mvdam>
//                 Kacper Wiszczuk <https://github.com/esemesek>
//                 Ryan Nickel <https://github.com/mrnickel>
//                 Souvik Ghosh <https://github.com/souvik-ghosh>
//                 Cheng Gibson <https://github.com/nossbigg>
//                 Saransh Kataria <https://github.com/saranshkataria>
//                 Wojciech Tyczynski <https://github.com/tykus160>
//                 Jake Bloom <https://github.com/jakebloom>
//                 Ceyhun Ozugur <https://github.com/ceyhun>
//                 Mike Martin <https://github.com/mcmar>
//                 Theo Henry de Villeneuve <https://github.com/theohdv>
//                 Romain Faust <https://github.com/romain-faust>
//                 Be Birchall <https://github.com/bebebebebe>
//                 Jesse Katsumata <https://github.com/Naturalclar>
//                 Xianming Zhong <https://github.com/chinesedfan>
//                 Valentyn Tolochko <https://github.com/vtolochk>
//                 Sergey Sychev <https://github.com/SychevSP>
//                 Daiki Ihara <https://github.com/sasurau4>
//                 Abe Dolinger <https://github.com/256hz>
//                 Dominique Richard <https://github.com/doumart>
//                 Mohamed Shaban <https://github.com/drmas>
//                 Jérémy Barbet <https://github.com/jeremybarbet>
//                 David Sheldrick <https://github.com/ds300>
//                 Natsathorn Yuthakovit <https://github.com/natsathorn>
//                 ConnectDotz <https://github.com/connectdotz>
//                 Alexey Molchan <https://github.com/alexeymolchan>
//                 Alex Brazier <https://github.com/alexbrazier>
//                 Arafat Zahan <https://github.com/kuasha420>
//                 Pedro Hernández <https://github.com/phvillegas>
//                 Sebastian Silbermann <https://github.com/eps1lon>
//                 Zihan Chen <https://github.com/ZihanChen-MSFT>
//                 Lorenzo Sciandra <https://github.com/kelset>
//                 Mateusz Wit <https://github.com/MateWW>
//                 Luna Wei <https://github.com/lunaleaps>
//                 Saad Najmi <https://github.com/saadnajmi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// USING: these definitions are meant to be used with the TSC compiler target set to at least ES2015.
//
// USAGE EXAMPLES: check the RNTSExplorer project at https://github.com/bgrieder/RNTSExplorer
//
// CONTRIBUTING: please open pull requests
//
// CREDITS: This work is based on an original work made by Bernd Paradies: https://github.com/bparadie
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/// <reference path="BatchedBridge.d.ts" />
/// <reference path="Codegen.d.ts" />
/// <reference path="Devtools.d.ts" />
/// <reference path="globals.d.ts" />
/// <reference path="LaunchScreen.d.ts" />

export * from './Libraries/ActionSheetIOS';
export * from './Libraries/Alert';
export * from './Libraries/Animated';
export * from './Libraries/Easing';
export * from './Libraries/useAnimatedValue';
export * from './Libraries/AppState';
export * from './Libraries/NativeModules';
export * from './Libraries/AccessibilityInfo';
export * from './Libraries/ActivityIndicator';
export * from './Libraries/Clipboard';
export * from './Libraries/DatePickerIOS';
export * from './Libraries/DrawerLayoutAndroid';
export * from './Libraries/Keyboard';
export * from './Libraries/KeyboardAvoidingView';
export * from './Libraries/Pressable';
export * from './Libraries/ProgressBarAndroid';
export * from './Libraries/ProgressViewIOS';
export * from './Libraries/RefreshControl';
export * from './Libraries/SafeAreaView';
export * from './Libraries/ScrollView';
export * from './Libraries/Slider';
export * from './Libraries/StatusBar';
export * from './Libraries/Switch';
export * from './Libraries/InputAccessoryView';
export * from './Libraries/TextInput';
export * from './Libraries/ToastAndroid';
export * from './Libraries/Touchable';
export * from './Libraries/TouchableHighlight';
export * from './Libraries/TouchableNativeFeedback';
export * from './Libraries/TouchableOpacity';
export * from './Libraries/TouchableWithoutFeedback';
export * from './Libraries/View';
export * from './Libraries/ViewAccessibility';
export * from './Libraries/ViewPropTypes';
export * from './Libraries/Button';
export * from './Libraries/NativeEventEmitter';
export * from './Libraries/RCTDeviceEventEmitter';
export * from './Libraries/RCTNativeAppEventEmitter';
export * from './Libraries/Image';
export * from './Libraries/ImagePickerIOS';
export * from './Libraries/ImageResizeMode';
export * from './Libraries/ImageSource';
export * from './Libraries/InteractionManager';
export * from './Libraries/PanResponder';
export * from './Libraries/LayoutAnimation';
export * from './Libraries/Linking';
export * from './Libraries/FlatList';
export * from './Libraries/SectionList';
export * from './Libraries/VirtualizedList';
export * from './Libraries/LogBox';
export * from './Libraries/Modal';
export * as Systrace from './Libraries/Systrace';
export * from './Libraries/PermissionsAndroid';
export * from './Libraries/PushNotificationIOS';
export * from './Libraries/AppRegistry';
export * from './Libraries/I18nManager';
export * from './Libraries/RendererProxy';
export * from './Libraries/UIManager';
export * from './Libraries/requireNativeComponent';
export * from './Libraries/Settings';
export * from './Libraries/Share';
export * from './Libraries/PlatformColorValueTypesIOS';
export * from './Libraries/PlatformColorValueTypes';
export * from './Libraries/StyleSheet';
export * from './Libraries/StyleSheetTypes';
export * from './Libraries/processColor';
export * from './Libraries/Text';
export * from './Libraries/RCTExport';
export * from './Libraries/TurboModuleRegistry';
export * from './Libraries/CoreEventTypes';
export * from './Libraries/Appearance';
export * from './Libraries/BackHandler';
export * from './Libraries/DevSettings';
export * from './Libraries/Dimensions';
export * from './Libraries/PixelRatio';
export * from './Libraries/Platform';
export * from './Libraries/Vibration';
export * from './Libraries/YellowBoxDeprecated';
export * from './Libraries/ErrorUtils';
export * from './Libraries/EventEmitter';

export * from './public/DeprecatedPropertiesAlias';
export * from './public/Insets';
export * from './public/ReactNativeRenderer';
export * from './public/ReactNativeTypes';

import type {ErrorUtils} from './Libraries/ErrorUtils';

declare global {
  interface NodeRequire {
    (id: string): any;
  }

  var require: NodeRequire;

  /**
   * Console polyfill
   * @see https://reactnative.dev/docs/javascript-environment#polyfills
   */
  interface Console {
    error(message?: any, ...optionalParams: any[]): void;
    info(message?: any, ...optionalParams: any[]): void;
    log(message?: any, ...optionalParams: any[]): void;
    warn(message?: any, ...optionalParams: any[]): void;
    trace(message?: any, ...optionalParams: any[]): void;
    debug(message?: any, ...optionalParams: any[]): void;
    table(...data: any[]): void;
    groupCollapsed(label?: string): void;
    groupEnd(): void;
    group(label?: string): void;
    /**
     * @deprecated Use LogBox.ignoreLogs(patterns) instead
     */
    ignoredYellowBox: string[];
  }

  var console: Console;

  /**
   * This contains the non-native `XMLHttpRequest` object, which you can use if you want to route network requests
   * through DevTools (to trace them):
   *
   *   global.XMLHttpRequest = global.originalXMLHttpRequest;
   *
   * @see https://github.com/facebook/react-native/issues/934
   */
  const originalXMLHttpRequest: any;

  const __BUNDLE_START_TIME__: number;
  const ErrorUtils: ErrorUtils;

  /**
   * This variable is set to true when react-native is running in Dev mode
   * @example
   * if (__DEV__) console.log('Running in dev mode')
   */
  const __DEV__: boolean;

  const HermesInternal: null | {};
}
