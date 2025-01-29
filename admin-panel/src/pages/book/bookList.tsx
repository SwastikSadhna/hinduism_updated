import { Datagrid, List, TextField, FunctionField } from 'react-admin';

const BookList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <FunctionField label="description" render={(record) => `${record.description.substring(0, 50)}...`} />
            <TextField source="link" />
            <TextField source="author" />
            <TextField source="image" />
            <TextField source="cover_image" />
            <TextField source="keyword" />
            <TextField source="year" />
        </Datagrid>
    </List>
);

export default BookList;