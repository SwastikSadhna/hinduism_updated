import { Datagrid, List, NumberField, TextField } from 'react-admin';

const AvatarList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="image" />
            <TextField source="yuga" />
            <TextField source="books" />
            <TextField source="description" />
            <TextField source="festival" />
            <TextField source="tamples" />
            <NumberField source="god_ref" />
            <TextField source="sloka" />
            <TextField source="festivals" />
            <TextField source="reference_links" />
        </Datagrid>
    </List>
);

export default AvatarList;