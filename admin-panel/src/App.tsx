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
import bhaktiEdit from "./pages/bhakti/bhaktiEdit";
const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}> 
            <Admin layout={Layout} dataProvider={dataProvider} dashboard={Dashboard} authProvider={authProvider} loginPage={Login}>
                
                <CustomRoutes>
                    <Route path="/signup" element={<Signup />} />
                </CustomRoutes>

                <PermissionsBasedResources />
                
            </Admin>
        </QueryClientProvider>
    );
};

// ✅ Component to Conditionally Render Resources Based on Permissions
const PermissionsBasedResources = () => {
    const { permissions } = usePermissions();
    console.log(permissions);
    if (!permissions) return null; 
    return (
        <>
            {(permissions.includes("read:bhakti") || permissions.includes("all:bhakti")) && (<Resource name="bhakti" list={bhaktiList} show={bhaktiShow} create={bhaktiCreate} edit={bhaktiEdit} icon={AutoStoriesIcon} />)}
            {permissions.includes("read:categories") && <Resource name="bhakti/categories" list={ListGuesser} show={ShowGuesser} icon={CategoryIcon} />}
            {permissions.includes("read:book") && <Resource name="book" list={bookList} show={BookShow} icon={BookIcon} />}
            {permissions.includes("read:temples") && <Resource name="temples" list={templeList} show={TempleShow} icon={TempleHinduIcon} />}
            {permissions.includes("read:avatar") && <Resource name="avatar" list={avatarList} show={AvatarShow} icon={PersonIcon} />}
            {permissions.includes("read:god") && <Resource name="god" list={godList} show={GodShow} icon={CollectionsBookmarkIcon} />}
            {permissions.includes("read:sloka") && <Resource name="sloka" list={ListGuesser} show={ShowGuesser} icon={MenuBookIcon} />}
            {permissions.includes("read:granth") && <Resource name="granth" list={ListGuesser} show={ShowGuesser} icon={LibraryBooksIcon} />}
            {permissions.includes("read:granthitem") && <Resource name="granthitem" list={ListGuesser} show={ShowGuesser} icon={LibraryBooksIcon} />}
        </>
    );
};

export default App;
