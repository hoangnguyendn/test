import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classCSS from './NavigationItems.css';

const navigationItems = () => {
    return (
        <ul className={classCSS.NavigationItems}>
            <NavigationItem link="/"
                            active>
                Burger Builder
            </NavigationItem>
            <NavigationItem link="/">
                Checkout
            </NavigationItem>
        </ul>
    );
};


export default navigationItems;