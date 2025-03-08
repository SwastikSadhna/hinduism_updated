import { Create, ImageInput, TextInput, SimpleForm } from 'react-admin';

const GranthCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="title" />
            <TextInput source="description" />
            <ImageInput source="image" />
        </SimpleForm>
    </Create>
);

export default GranthCreate;