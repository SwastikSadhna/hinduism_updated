import {  Datagrid, ImageField, List, EditButton, TextField } from 'react-admin';
import {useAuth, AuthBulkActions} from "../auth/AuthProvider"

const TempleList = () => {
    const {hasPermission} = useAuth()
    return (
    <List>
        <Datagrid>
            <TextField source="id" />
            <ImageField source="cover_image" />
            <TextField source="name" />
            <TextField source="god" />
            <TextField source="location" />
            {hasPermission('update','avatar') && <EditButton />}
        </Datagrid>
    </List>
)};

export default TempleList