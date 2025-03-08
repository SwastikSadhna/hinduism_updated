import { DeleteButton, NumberField, Show, SimpleShowLayout, TextField } from 'react-admin';
import {useAuth} from "../auth/AuthProvider"

const BhaktiShow = () => {
    const {hasPermission} = useAuth()

    return (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="description" />
            <TextField source="keyword" />
            <TextField source="image" />
            <TextField source="file" />
            <TextField source="author" />
            <TextField source="reference_links" />
            <TextField source="content" />
            <NumberField source="category" />
            {hasPermission('delete','bhakti') && <DeleteButton />}
        </SimpleShowLayout>
    </Show>
)};

export default BhaktiShow