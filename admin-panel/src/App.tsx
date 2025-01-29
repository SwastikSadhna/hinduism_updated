import { Admin, ListGuesser, Resource, ShowGuesser } from "react-admin";
import { Layout } from './Layout';
import dataProvider from "./dataProvider";

// Import Icons
import BookIcon from "@mui/icons-material/Book";
import TempleHinduIcon from "@mui/icons-material/TempleHindu";
import PersonIcon from "@mui/icons-material/Person";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CategoryIcon from "@mui/icons-material/Category";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import LibraryBooksIcon from "@mui/icons-material/List";

import Dashboard from "./pages/dashboard";

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

// Create
import bhaktiCreate from "./pages/bhakti/bhaktiCreate";

const App = () => {
    return (
        <Admin layout={Layout} dataProvider={dataProvider} dashboard={Dashboard} >
            <Resource name="bhakti" list={bhaktiList} show={bhaktiShow} create={bhaktiCreate} icon={AutoStoriesIcon} />
            <Resource name="categories" list={ListGuesser} show={ShowGuesser} icon={CategoryIcon} />
            <Resource name="book" list={bookList} show={BookShow} icon={BookIcon} />
            <Resource name="temple" list={templeList} show={TempleShow} icon={TempleHinduIcon} />
            <Resource name="avatar" list={avatarList} show={AvatarShow} icon={PersonIcon} />
            <Resource name="god" list={godList} show={GodShow} icon={CollectionsBookmarkIcon} />
            <Resource name="sloka" list={ListGuesser} show={ShowGuesser} icon={MenuBookIcon} />
            <Resource name="granth" list={ListGuesser} show={ShowGuesser} icon={LibraryBooksIcon} />
            <Resource name="granthitem" list={ListGuesser} show={ShowGuesser} icon={LibraryBooksIcon} />
        </Admin>
    );
};

export default App;
