import React, { useState } from 'react';
import "./ReactTab.css"
import c1 from "../../../assets/jeepc1.jpg"
import c2 from "../../../assets/c2.png"
import c4 from "../../../assets/c4.jpg"

export default function ReactTab() {
    const [currentTab, setCurrentTab] = useState('1');

    const tabs = [
        {
            id: 1,
            tabTitle: 'Category 1',
            title: 'Jeep Toy',
            imgSrc: c1
        },
        {
            id: 2,
            tabTitle: 'Category 2',
            title: 'Motor Cycle Toy',
            imgSrc: c2 
        },
        {
            id: 3,
            tabTitle: 'Category 3',
            title: 'Racing Car',
            imgSrc: c4
        },
    ]
    const handleTabClick = (e) => {
        setCurrentTab(e.target.id)
    }
    return (
            <div className='container'>
                <h2 className='text-4xl text-center font-bold text-red-850'>Shop By Category</h2>
                <div className='tabs'>
                    {
                        tabs.map((tab, i) => <button className='btn btn-primary '
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
                                        <h2 className='italic font-bold text-2xl'>Sub-Category: <p className='text-3xl font-semibold text-center mb-3'> {tab.title}</p></h2>
                                        <img className='w-1/2 h-[200px] rounded' src={tab.imgSrc} alt="" />
                                    </div>
                                }
                            </div>
                        )
                    }
                </div>
            </div>
    );
};


