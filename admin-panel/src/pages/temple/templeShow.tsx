import { Show, ImageField, SimpleShowLayout, TextField } from 'react-admin';

const TempleShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <ImageField source="cover_image" />
            <TextField source="map_url" />
            <TextField source="reference_link" />
            <TextField source="god" />
            <TextField source="location" />
            <TextField source="importance" />
            <TextField source="images" />
            <TextField source="keyword" />
        </SimpleShowLayout>
    </Show>
);

export default TempleShow;