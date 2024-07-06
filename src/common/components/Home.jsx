import React, { useState } from "react";

// Components
import Tabs from './Tabs'
import TabPanel from './TabPanel'
import MainHeader from './MainHeader'
import Schedule from './Schedule'
import Players from './Players'
import Results from './Results'
import ContentBlock from "./ContentBlock";


const Home = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleChange = (_event, newTabValue) => {
        setActiveTab(newTabValue);
    };

    return (
        <>
            <MainHeader />
            <ContentBlock sx={{ p: 2 }}>
                <Tabs
                    tabs={["Match Schedule", "Players", "Results"]}
                    activeTab={activeTab}
                    handleTabChange={handleChange}
                />
                <TabPanel value={activeTab} index={0}>
                    <Schedule />
                </TabPanel>
                <TabPanel value={activeTab} index={1}>
                    <Players />
                </TabPanel>
                <TabPanel value={activeTab} index={2}>
                    <Results />
                </TabPanel>
            </ContentBlock>
        </>
    )
}

export default Home