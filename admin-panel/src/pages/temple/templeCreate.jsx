import { Create, ImageInput, SimpleForm, TextInput, ArrayInput, SimpleFormIterator } from 'react-admin';

const TempleCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
            <TextInput source="description" />
            <ImageInput source="cover_image" />
            <TextInput source="map_url" />
            <TextInput source="reference_link" />
            <TextInput source="god" />
            <TextInput source="location" />
            <TextInput source="importance" />
            <ArrayInput source="images">
                <SimpleFormIterator>
                    <ImageInput source="images" />
                </SimpleFormIterator>
            </ArrayInput>
            <ArrayInput source="keyword">
                <SimpleFormIterator>
                    <TextInput source="keyword" />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Create>
);

export default TempleCreate;