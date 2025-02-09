import { Admin, ListGuesser, Resource, ShowGuesser, CustomRoutes } from "react-admin";
import { Layout } from './Layout';
import dataProvider from "./dataProvider";
import authProvider from "./authProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; 
import { Route, Navigate } from "react-router-dom";
import { usePermissions } from "react-admin";

// Import Pages
import Dashboard from "./pages/dashboard";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

// Import Icons
import BookIcon from "@mui/icons-material/Book";
import TempleHinduIcon from "@mui/icons-material/TempleHindu";
import PersonIcon from "@mui/icons-material/Person";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CategoryIcon from "@mui/icons-material/Category";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import LibraryBooksIcon from "@mui/icons-material/List";

// List Components
import bhaktiList from './pages/bhakti/bhaktiList';
import bookList from './pages/book/bookList';
import godList from './pages/god/godList';
import templeList from './pages/temple/templeList';
import avatarList from './pages/avatar/avatarList';

// Show Components
import bhaktiShow from './pages/bhakti/bhaktiShow';
import BookShow from "./pages/book/bookShow";
import TempleShow from "./pages/temple/templeShow";
import AvatarShow from "./pages/avatar/avatarShow";
import GodShow from "./pages/god/godShow";

// Create Components
import bhaktiCreate from "./pages/bhakti/bhaktiCreate";

// Edit Components
import BhaktiEdit from "./pages/bhakti/BhaktiEdit";
const queryClient = new QueryClient();

const App = () => {

    const permissions = JSON.parse(localStorage.getItem("auth") || '{"permissions": []}').permissions;
    const hasPermission = (action : string, resource: string) => permissions.includes(`${action}:${resource}`);

    return (
        <QueryClientProvider client={queryClient}> 
            <Admin layout={Layout} dataProvider={dataProvider} dashboard={Dashboard} authProvider={authProvider} loginPage={Login}>
                
                <CustomRoutes>
                    <Route path="/signup" element={<Signup />} />
                </CustomRoutes>

                <Resource name="bhakti" list={bhaktiList} show={bhaktiShow} create={hasPermission('create','bhakti') && bhaktiCreate} edit={hasPermission('edit','bhakti') && BhaktiEdit} icon={AutoStoriesIcon} />
                <Resource name="bhakti/categories" list={ListGuesser} show={ShowGuesser} icon={CategoryIcon} />
                <Resource name="book" list={bookList} show={BookShow} icon={BookIcon} />
                <Resource name="temples" list={templeList} show={TempleShow} icon={TempleHinduIcon} />
                <Resource name="avatar" list={avatarList} show={AvatarShow} icon={PersonIcon} />
                <Resource name="god" list={godList} show={GodShow} icon={CollectionsBookmarkIcon} />
                <Resource name="sloka" list={ListGuesser} show={ShowGuesser} icon={MenuBookIcon} />
                <Resource name="granth" list={ListGuesser} show={ShowGuesser} icon={LibraryBooksIcon} />
                <Resource name="granthitem" list={ListGuesser} show={ShowGuesser} icon={LibraryBooksIcon} />
                
            </Admin>
        </QueryClientProvider>

    );
};


export default App;
