import { Datagrid, BulkDeleteButton, List, TextField, FunctionField, EditButton, ImageField } from 'react-admin';
import {useAuth} from '../auth/AuthProvider';

const BookList = () =>{
    const {hasPermission} = useAuth();

    return (
    <List>
        <Datagrid bulkActionButtons={hasPermission("delete", "book") && <BulkDeleteButton />}>
            <TextField source="id" />
            <TextField source="title" />
            <FunctionField label="description" render={(record) => `${record.description.substring(0, 50)}...`} />
            <TextField source="link" />
            <TextField source="author" />
            <TextField source="keyword" />
            <TextField source="year" />
            {hasPermission('update','book') && <EditButton />}
        </Datagrid>
    </List>
);}

export default BookList;