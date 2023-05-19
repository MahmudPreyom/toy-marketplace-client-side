import React, { useState } from 'react';
import "../../components/ReactTab/ReactTab.css"

export default function ReactTab(){
    const [currentTab, setCurrentTab] = useState('1');

    const tabs = [
        {
            id: 1,
            tabTitle: 'Tab 1',
            title: 'title 1',
            content: 'a'
        },
        {
            id: 2,
            tabTitle: 'Tab 2',
            title: 'title 2',
            content: 'b'
        },
        {
            id: 3,
            tabTitle: 'Tab 3',
            title: 'title 3',
            content: 'c'
        },
    ]
    const handleTabClick = (e) => {
        setCurrentTab(e.target.id)
    }
    return (
        <div className='container'>
            <div className='tabs'>
                {
                    tabs.map((tab, i) => <button className='btn btn-outline btn-info'
                        key={i}
                        id={tab.id}
                        disabled={currentTab === `${tab.id}`}
                        onClick={(handleTabClick)}
                    >
                        {tab.tabTitle}
                    </button>)
                }
            </div>
            <div className='content'>
                {
                    tabs.map((tab, i) =>
                        <div key={i}>
                            {
                                currentTab === `${tab.id}` &&
                                <div>
                                    <p>{tab.title}</p>
                                    <p>{tab.content}</p>
                                </div>
                            }
                        </div>
                    )
                }
            </div>
        </div>
    );
};


