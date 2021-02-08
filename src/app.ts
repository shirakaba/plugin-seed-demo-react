import * as React from 'react';

/* Controls react-nativescript log verbosity. true: all logs; false: only error logs. */
Object.defineProperty(global, '__DEV__', { value: false });

/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

import * as ReactNativeScript from 'react-nativescript';
import { mainStackNavigator as AppContainer } from './components/Navigator';

declare var com: any;
if(com.facebook){
    console.log(`com.facebook`, com.facebook);
    for(let key in com.facebook){
        console.log(key);
    }
} else {
    console.log(`com.facebook: undefined`);
}

import { install } from './components/linked-components/install';
install();

ReactNativeScript.start(React.createElement(AppContainer, {}, null));

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
