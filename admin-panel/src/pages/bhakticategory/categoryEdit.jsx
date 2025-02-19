import { SimpleForm, Edit, TextInput, ImageInput } from 'react-admin';

const CategoryEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" />
            <ImageInput source="image" />
            <TextInput source="description" />
        </SimpleForm>
    </Edit>
);

export default CategoryEdit;