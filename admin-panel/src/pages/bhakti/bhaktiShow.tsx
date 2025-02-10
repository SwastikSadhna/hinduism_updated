import { DeleteButton, NumberField, Show, SimpleShowLayout, TextField } from 'react-admin';

const BhaktiShow = () => {
    const permissions = JSON.parse(localStorage.getItem("auth") || '{"permissions": []}').permissions;
    const hasPermission = (action : string, resource: string) => permissions.includes(`${action}:${resource}`);

    return (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="description" />
            <TextField source="keyword" />
            <TextField source="image" />
            <TextField source="author" />
            <TextField source="reference_links" />
            <TextField source="content" />
            <NumberField source="category" />
            {hasPermission('delete','bhakti') && <DeleteButton />}
        </SimpleShowLayout>
    </Show>
)};

export default BhaktiShow