import { SimpleForm, Create, TextInput, ImageInput } from 'react-admin';

const CategoryCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" />
            <ImageInput source="image" />
            <TextInput source="description" />
        </SimpleForm>
    </Create>
);

export default CategoryCreate;