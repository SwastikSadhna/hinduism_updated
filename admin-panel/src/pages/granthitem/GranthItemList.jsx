import { Datagrid, List, NumberField, ReferenceField, TextField, ImageField, EditButton } from 'react-admin';
import {useAuth, AuthBulkActions} from "../auth/AuthProvider"

const GranthitemList = () => {
    const {hasPermission} = useAuth()

    return (
    <List>
        <Datagrid>
            <TextField source="id" />
            <ImageField source="image" />
            <TextField source="title" />
            <TextField source="description" />
            <TextField source="granth_id" />
            <NumberField source="year" />
            {hasPermission('update','granthitem') && <EditButton />}
        </Datagrid>
    </List>
)};

export default GranthitemList;