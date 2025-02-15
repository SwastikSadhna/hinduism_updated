import { Edit, SimpleForm, TextInput, ImageInput, ArrayInput, SimpleFormIterator } from 'react-admin';

const GodEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
            <ImageInput source="image" />
            <TextInput source="description" />
            <ArrayInput source="keyword">
                <SimpleFormIterator>
                    <TextInput source="keyword" />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>
);

export default GodEdit;