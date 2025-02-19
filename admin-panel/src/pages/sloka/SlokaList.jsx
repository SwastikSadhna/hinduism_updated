import { Datagrid, ImageField, List, TextField, EditButton } from 'react-admin';
import {useAuth, AuthBulkActions} from "../auth/AuthProvider"
const SlokaList = () => {
    const {hasPermission} = useAuth()
    return (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="sloka" />
            <TextField source="explaination" />
            {hasPermission('update','sloka') && <EditButton />}
        </Datagrid>
    </List>
)};

export default SlokaList;