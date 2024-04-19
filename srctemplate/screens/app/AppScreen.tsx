import React, { useState } from 'react';
import NavigationBar from '../../layouts/NavigationBar';

function AppScreen(): React.JSX.Element {
    const [badgeCount, setBadgeCount] = useState(2);

    return (
        <NavigationBar badgeCount={badgeCount} />
    )
}

export default AppScreen;