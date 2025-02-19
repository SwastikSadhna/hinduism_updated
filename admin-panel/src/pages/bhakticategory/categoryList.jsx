import { Datagrid, List, TextField, EditButton } from 'react-admin';
import {useAuth, AuthBulkActions} from "../auth/AuthProvider"

const CategoryList = () => {
    const {hasPermission} = useAuth()
    return (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            {hasPermission('update','bhakticategory') && <EditButton />}
        </Datagrid>
    </List>
)};

export default CategoryList;