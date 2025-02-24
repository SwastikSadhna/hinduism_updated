import { Edit, ImageInput, SimpleForm, TextInput, ArrayInput, SimpleFormIterator } from 'react-admin';  

const TempleEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="description" />
            <ImageInput source="cover_image" />
            <TextInput source="map_url" />
            <TextInput source="god" />
            <TextInput source="location" />
            <ArrayInput source="images">
                <SimpleFormIterator>
                    <ImageInput/>
                </SimpleFormIterator>
            </ArrayInput>

            <ArrayInput source="reference_link">
                <SimpleFormIterator>
                    <TextInput/>
                </SimpleFormIterator>
            </ArrayInput>

            <ArrayInput source="keyword">
                <SimpleFormIterator>
                    <TextInput/>
                </SimpleFormIterator>
            </ArrayInput>

            <ArrayInput source="importance">
                <SimpleFormIterator>
                    <TextInput/>
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>
);

export default TempleEdit;
