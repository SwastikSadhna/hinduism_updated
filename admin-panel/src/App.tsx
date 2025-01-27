import React from "react";
import { Admin, Resource, ListGuesser } from "react-admin";
import dataProvider from "./dataProvider"; // Import your custom dataProvider

const App = () => {
    return (
        <Admin dataProvider={dataProvider}>
            <Resource name="bhakti" list={ListGuesser} />
            <Resource name="book" list={ListGuesser} />
            <Resource name="temple" list={ListGuesser} />
            <Resource name="avatar" list={ListGuesser} />
            <Resource name="god" list={ListGuesser} />
        </Admin>
    );
};

export default App;