import { Show, SimpleShowLayout, TextField } from 'react-admin';

const SlokaShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="sloka" />
            <TextField source="explaination" />
            <TextField source="image" />
            <TextField source="description" />
            <TextField source="keyword" />
        </SimpleShowLayout>
    </Show>
);

export default SlokaShow