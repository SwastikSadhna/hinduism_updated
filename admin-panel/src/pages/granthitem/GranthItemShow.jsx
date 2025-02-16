import { ImageField, ReferenceField, Show, SimpleShowLayout, TextField } from 'react-admin';

const GranthitemShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="description" />
            <ImageField source="image" />
            <TextField source="link" />
            <ReferenceField source="granth_id" reference="granths" />
            <TextField source="author" />
            <TextField source="year" />
        </SimpleShowLayout>
    </Show>
);

export default GranthitemShow;