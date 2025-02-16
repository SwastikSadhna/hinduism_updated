import { Edit, ImageInput, SimpleForm, TextInput, ArrayInput, SimpleFormIterator } from 'react-admin';  

const TempleEdit = () => (
    <Edit>
        <SimpleForm>
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
                    <ImageInput/>
                </SimpleFormIterator>
            </ArrayInput>

            <ArrayInput source="keyword">
                <SimpleFormIterator>
                    <TextInput/>
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>
);

export default TempleEdit;
