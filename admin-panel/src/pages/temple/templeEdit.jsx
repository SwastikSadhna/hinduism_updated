import { Edit, ImageInput, SimpleForm, TextInput, ArrayInput, SimpleFormIterator } from 'react-admin';

const TempleEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
            <TextInput source="description" />
            <ImageInput source="cover_image" />
            <TextInput source="map_url" />
            <TextInput source="reference_link" />
            <TextInput source="god" />
            <TextInput source="location" />
            <ArrayInput source="importance">
                <SimpleFormIterator>
                    <TextInput source="importance" />
                </SimpleFormIterator>
            </ArrayInput>
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
    </Edit>
);

export default TempleEdit;