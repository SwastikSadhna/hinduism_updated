import { Create, ImageInput, TextInput, SimpleForm } from 'react-admin';

const GranthCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="title" />
            <TextInput source="description" />
            <ImageInput source="images" />
        </SimpleForm>
    </Create>
);

export default GranthCreate;