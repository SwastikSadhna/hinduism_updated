import { Datagrid, BulkDeleteButton, List, NumberField, TextField, EditButton, TextInput } from 'react-admin';

const CustomBulkActions = () => {
    const permissions = JSON.parse(localStorage.getItem("auth") || '{"permissions": []}').permissions;
    return permissions.includes(`delete:bhakti`) ? <BulkDeleteButton /> : null;
};


const BhaktiList = (props:object) => {
    const bhaktiFilter = [<TextInput source='q' label="search" alwaysOn />];
    const permissions = JSON.parse(localStorage.getItem("auth") || '{"permissions": []}').permissions;
    const hasPermission = (action : string, resource: string) => permissions.includes(`${action}:${resource}`);

    return (
    <List filters={bhaktiFilter} >
        <Datagrid bulkActionButtons={<CustomBulkActions />}>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="description" />
            <TextField source="keyword" />
            <TextField source="image" />
            <TextField source="author" />
            <TextField source="reference_links" />
            <TextField source="content" />
            <NumberField source="category" />
            {hasPermission('edit','bhakti') && <EditButton />}
            
        </Datagrid>
    </List>
);
}

export default BhaktiList;