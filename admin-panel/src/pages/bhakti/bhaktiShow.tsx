import { NumberField, Show, SimpleShowLayout, TextField } from 'react-admin';

const BhaktiShow = () => (
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
        </SimpleShowLayout>
    </Show>
);

export default BhaktiShow