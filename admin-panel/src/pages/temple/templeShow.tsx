import { Show, SimpleShowLayout, TextField } from 'react-admin';

const TempleShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="cover_image" />
            <TextField source="name" />
            <TextField source="location" />
        </SimpleShowLayout>
    </Show>
);

export default TempleShow;