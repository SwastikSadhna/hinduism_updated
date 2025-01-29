import { Datagrid, List, TextField } from 'react-admin';

const TempleList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="cover_image" />
            <TextField source="name" />
            <TextField source="location" />
        </Datagrid>
    </List>
);

export default TempleList;