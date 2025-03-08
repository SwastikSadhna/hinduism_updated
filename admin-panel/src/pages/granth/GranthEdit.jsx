import { Edit, ImageInput, SimpleShowLayout, TextInput, SimpleForm } from 'react-admin';

const GranthEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="title" />
            <TextInput source="description" />
            <ImageInput source="image" />
        </SimpleForm>
    </Edit>
);

export default GranthEdit;