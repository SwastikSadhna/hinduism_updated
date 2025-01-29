import { Datagrid, List, NumberField, TextField } from 'react-admin';

const BhaktiList = () => (
    <List>
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
        </Datagrid>
    </List>
);

export default BhaktiList;