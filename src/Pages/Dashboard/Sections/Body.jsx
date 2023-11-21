// Dashboard.js
import React from 'react';
import Tabs from './Tabs';
import Classes from './Tabs/Classes'
import Home from './Tabs/Home'
import Assignment from './Tabs/Assignment'
import Settings from './Tabs/Home'
import Messages from './Tabs/Messages'

const Body = () => {
    const tabs = [
        {
          label: 'Tab 1',
          contentComponent: <Home/>,
        },
        {
          label: 'Tab 2',
          contentComponent: <Classes />,
        },
        {
            label: 'Tab 3',
            contentComponent: <Assignment />,
        },
        {
            label: 'Tab 4',
            contentComponent: <PaymentInfo />,
        },
        {
            label: 'Tab 5',
            contentComponent: <Settings />,
        },
        {
            label: 'Tab 6',
            contentComponent: <Reports />,
        },
        {
            label: 'Tab 7',
            contentComponent: <Messages />,
        },
        
      ];

  return (
    <div>
      <h1>User Dashboard</h1>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default Body;
