import { Create, SimpleForm, TextInput, ImageInput, ArrayInput, SimpleFormIterator } from 'react-admin';

const GodCreate = () => (
    <Create>
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
    </Create>
);

export default GodCreate;