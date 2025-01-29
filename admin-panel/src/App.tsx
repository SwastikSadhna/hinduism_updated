import { Admin, ListGuesser, Resource, ShowGuesser } from "react-admin";
import { Layout } from './Layout';
import dataProvider from "./dataProvider";

// show all
import bhaktiList from './pages/bhakti/bhaktiList';
import bookList from './pages/book/bookList';
import godList from './pages/god/godList';
import templeList from './pages/temple/templeList';
import avatarList from './pages/avatar/avatarList';

// show One
import bhaktiShow from './pages/bhakti/bhaktiShow';
import BookShow from "./pages/book/bookShow";
import TempleShow from "./pages/temple/templeShow";
import AvatarShow from "./pages/avatar/avatarShow";
import GodShow from "./pages/god/godShow";

const App = () => {
    return (
        <Admin layout={Layout} dataProvider={dataProvider}>
            <Resource name="bhakti" list={bhaktiList} show={bhaktiShow} />
            <Resource name="categories" list={ListGuesser} show={ShowGuesser} />
            <Resource name="book" list={bookList} show={BookShow} />
            <Resource name="temple" list={templeList} show={TempleShow} />
            <Resource name="avatar" list={avatarList} show={AvatarShow} />
            <Resource name="god" list={godList} show={GodShow} />
            <Resource name="sloka" list={ListGuesser} show={ShowGuesser} />
            <Resource name="granth" list={ListGuesser} show={ShowGuesser} />
            <Resource name="granthitem" list={ListGuesser} show={ShowGuesser} />
        </Admin>
    );
};

export default App;