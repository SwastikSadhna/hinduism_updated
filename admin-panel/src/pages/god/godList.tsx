import { Datagrid, List, TextField, EditButton } from 'react-admin';
import {useAuth, AuthBulkActions} from "../auth/AuthProvider"

const GodList = () => {
    const {hasPermission} = useAuth()
    return (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <TextField source="keyword" />
            {hasPermission('update','god') && <EditButton />}
        </Datagrid>
    </List>
)};

export default GodList;