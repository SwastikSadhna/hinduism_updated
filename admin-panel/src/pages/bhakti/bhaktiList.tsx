import { Datagrid, List, NumberField, TextField, EditButton, TextInput } from 'react-admin';

const BhaktiList = () => {
    const bhaktiFilter = [<TextInput source='q' label="search" alwaysOn />];

    return (
    <List filters={bhaktiFilter}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="description" />
            <TextField source="keyword" />
            <TextField source="image" />
            <TextField source="author" />
            <TextField source="reference_links" />
            <TextField source="content" />
            <NumberField source="category" />
            <EditButton />
        </Datagrid>
    </List>
);
}

export default BhaktiList;