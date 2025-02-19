import { Datagrid, List, NumberField, TextField, ImageField, EditButton } from 'react-admin';
import {useAuth, AuthBulkActions} from "../auth/AuthProvider"

const AvatarList = () => {
    const {hasPermission} = useAuth()
    return (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="yuga" />
            <TextField source="tamples" />
            {hasPermission('update','avatar') && <EditButton />}
        </Datagrid>
    </List>
)};

export default AvatarList;