/*
        IWA-Mobile - Insecure React Native mobile application

        Copyright 2023 Open Text or one of its affiliates.

        This program is free software: you can redistribute it and/or modify
        it under the terms of the GNU General Public License as published by
        the Free Software Foundation, either version 3 of the License, or
        (at your option) any later version.

        This program is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU General Public License for more details.

        You should have received a copy of the GNU General Public License
        along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

import * as React from 'react';
import {View} from 'react-native';
import {styles} from '../Styles';

import '../Global.js';
import ShoppingCart from '../components/ShoppingCart';

export default function Cart({navigation}) {
    return (
        <View style={styles.screenContainer}>
            <View>
                <ShoppingCart navigation={navigation} />
            </View>
        </View>
    );
}

