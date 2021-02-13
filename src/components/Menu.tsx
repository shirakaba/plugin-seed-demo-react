import * as React from 'react';
import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from 'react-nativescript-navigation';
import { MainStackParamList } from './NavigationParamList';
import { isAndroid } from "@nativescript/core";

import { demos } from './linked-components/install';
interface MenuProps {
    route: RouteProp<MainStackParamList, 'menu'>;
    navigation: FrameNavigationProp<MainStackParamList, 'menu'>;
}

export function Menu({ navigation }: MenuProps) {
    function goToDemo(component) {
        navigation.navigate(component);
    }

    if (DEVELOPMENT) {
        const Development = demos.find(({ name }) => name === 'Development');
        if (Development) {
            setTimeout(() => {
                navigation.navigate('development');
            }, 0);
        }
    }

    return (
        <scrollView>
            <stackLayout>
                <button
                    key={"sanity"}
                    onTap={() => {
                        if(isAndroid){
                            for(let key in com.facebook){
                                console.log(`com.facebook.${key}`);
                            }
                            return;
                        }
                        console.log(`Sanity check not yet implemented for iOS (plugin only implemented for Android).`);
                    }}
                >
                    Sanity check
                </button>
                {demos.map((demo) => (
                    <button
                        key={demo.name}
                        onTap={() => {
                            goToDemo(demo.path);
                        }}
                    >
                        {demo.name}
                    </button>
                ))}
            </stackLayout>
        </scrollView>
    );
}
