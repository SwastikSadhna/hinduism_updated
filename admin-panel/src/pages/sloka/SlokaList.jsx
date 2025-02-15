import { Datagrid, ImageField, List, TextField } from 'react-admin';

const SlokaList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <ImageField source="image" />
            <TextField source="title" />
            <TextField source="sloka" />
            <TextField source="explaination" />
        </Datagrid>
    </List>
);

export default SlokaList;