import { Show, SimpleShowLayout, TextField } from 'react-admin';

const CategoryShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="image" />
            <TextField source="description" />
        </SimpleShowLayout>
    </Show>
);

export default CategoryShow;