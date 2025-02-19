import { Datagrid, BulkDeleteButton, List, NumberField, TextField, EditButton, TextInput, ImageField, ReferenceField } from 'react-admin';
import {useAuth, AuthBulkActions} from "../auth/AuthProvider"

const BhaktiList = (props:object) => {
    const bhaktiFilter = [<TextInput source='q' label="search" alwaysOn />];
    const {hasPermission} = useAuth()
    
    return (
    <List filters={bhaktiFilter} >
        <Datagrid bulkActionButtons={hasPermission("delete", "bhakti") && <BulkDeleteButton />}>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="description" />
            <TextField source="keyword" />
            {hasPermission('update','bhakti') && <EditButton />}
            
        </Datagrid>
    </List>
);
}

export default BhaktiList;