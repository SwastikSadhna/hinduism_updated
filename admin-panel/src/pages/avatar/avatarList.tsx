import { Datagrid, List, NumberField, TextField } from 'react-admin';

const AvatarList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="image" />
            <TextField source="yuga" />
            <TextField source="tamples" />
            <NumberField source="god_ref" />
        </Datagrid>
    </List>
);

export default AvatarList;