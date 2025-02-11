import { Datagrid, ImageField, List, TextField } from 'react-admin';

const TempleList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <ImageField source="cover_image" />
            <TextField source="name" />
            <TextField source="location" />
        </Datagrid>
    </List>
);

export default TempleList;