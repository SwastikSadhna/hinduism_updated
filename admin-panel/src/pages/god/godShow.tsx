import { Show, SimpleShowLayout, TextField } from 'react-admin';

const GodShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="image" />
            <TextField source="description" />
            <TextField source="keyword" />
        </SimpleShowLayout>
    </Show>
);

export default GodShow;