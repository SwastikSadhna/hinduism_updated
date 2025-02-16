import { Datagrid, ImageField, List, TextField, EditButton } from 'react-admin';
import {useAuth, AuthBulkActions} from "../auth/AuthProvider"

const GranthList = () => {
    const {hasPermission} = useAuth()
    return (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="description" />
            <ImageField source="images" />
            {hasPermission('update','granth') && <EditButton />}
        </Datagrid>
    </List>
)};

export default GranthList;