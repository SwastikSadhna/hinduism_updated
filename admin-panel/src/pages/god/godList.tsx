import { Datagrid, List, TextField } from 'react-admin';

const GodList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="image" />
            <TextField source="description" />
            <TextField source="keyword" />
        </Datagrid>
    </List>
);

export default GodList;