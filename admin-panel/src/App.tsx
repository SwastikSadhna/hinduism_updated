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
import SlokaList from './pages/sloka/SlokaList'
import GranthList from "./pages/granth/GranthList"
import GranthItemList from "./pages/granthitem/GranthItemList"

// Show Components
import bhaktiShow from './pages/bhakti/bhaktiShow';
import BookShow from "./pages/book/bookShow";
import TempleShow from "./pages/temple/templeShow";
import AvatarShow from "./pages/avatar/avatarShow";
import GodShow from "./pages/god/godShow";
import SlokaShow from "./pages/sloka/SlokaShow";
import GranthShow from "./pages/granth/GranthShow";
import GranthItemShow from "./pages/granthitem/GranthItemShow";

// Create Components
import bhaktiCreate from "./pages/bhakti/bhaktiCreate";
import BookCreate from "./pages/book/bookCreate";
import SlokaCreate from "./pages/sloka/SlokaCreate"
import GranthCreate from "./pages/granth/GranthCreate"
import GranthItemCreate from "./pages/granthitem/GranthItemCreate"

// Edit Components
import BhaktiEdit from "./pages/bhakti/BhaktiEdit";
import BookEdit from "./pages/book/bookEdit";
import SlokaEdit from "./pages/sloka/SlokaEdit";
import GranthEdit from "./pages/granth/GranthEdit"
import GranthItemEdit from "./pages/granthitem/GranthItemEdit"

const queryClient = new QueryClient();

// Auth Context
import { AuthProvider } from "./pages/auth/AuthProvider";

const App = () => {

    const permissions = JSON.parse(localStorage.getItem("auth") || '{"permissions": []}').permissions;
    const hasPermission = (action : string, resource: string) => permissions.includes(`${action}:${resource}`);

    return (
        <QueryClientProvider client={queryClient}> 
        <AuthProvider>
            <Admin layout={Layout} dataProvider={dataProvider} dashboard={Dashboard} authProvider={authProvider} loginPage={Login}>
                
                <CustomRoutes>
                    <Route path="/signup" element={<Signup />} />
                </CustomRoutes>

                {hasPermission("read","bhakti") && <Resource name="bhakti" list={bhaktiList} show={bhaktiShow} create={hasPermission('create','bhakti') && bhaktiCreate} edit={hasPermission('update','bhakti') && BhaktiEdit} icon={AutoStoriesIcon} />}
                {hasPermission("read","bhakticategory") && <Resource name="bhakti/categories" list={ListGuesser} show={ShowGuesser} icon={CategoryIcon} />}
                {hasPermission("read","book") && <Resource name="book" list={bookList} show={BookShow} create={<BookCreate />} edit={hasPermission("update","book") && <BookEdit />} icon={BookIcon} />}
                {hasPermission("read","temple") &&<Resource name="temples" list={templeList} show={TempleShow} icon={TempleHinduIcon} />}
                {hasPermission("read","avatar") &&<Resource name="avatar" list={avatarList} show={AvatarShow} icon={PersonIcon} />}
                {hasPermission("read","god") && <Resource name="god" list={godList} show={GodShow} icon={CollectionsBookmarkIcon} />}
                {hasPermission("read","sloka") && <Resource name="sloka" list={SlokaList} show={SlokaShow} create={hasPermission('create','sloka') && SlokaCreate} edit={hasPermission("update",'sloka') && SlokaEdit}  icon={MenuBookIcon} />}
                {hasPermission("read","granth") && <Resource name="granth" list={GranthList} show={GranthShow} create={hasPermission('create','granth') && GranthCreate} edit={hasPermission('update','granth') && GranthEdit} icon={LibraryBooksIcon} />}
                {hasPermission("read","granthitem") && <Resource name="granthitem" list={GranthItemList} show={GranthItemShow} create={hasPermission('create','granthitem') && GranthItemCreate} edit={hasPermission('update','granthitem') && GranthItemEdit} icon={LibraryBooksIcon} />}
                
            </Admin>
        </AuthProvider>
        </QueryClientProvider>

    );
};


export default App;
