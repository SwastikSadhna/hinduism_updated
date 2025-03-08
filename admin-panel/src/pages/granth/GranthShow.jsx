import { Show, ImageField, SimpleShowLayout, TextField } from 'react-admin';

const GranthShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="description" />
            <ImageField source="image" />
        </SimpleShowLayout>
    </Show>
);

export default GranthShow;