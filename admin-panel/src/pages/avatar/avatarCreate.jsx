import { NumberInput, Create, TextInput, SimpleForm, ArrayInput, SimpleFormIterator,ImageInput } from 'react-admin';

const AvatarCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" />
            <ImageInput source="image" />
            <TextInput source="yuga" />
            <TextInput source="books" />
            <TextInput source="description" />
            <ArrayInput source="temples">
            <SimpleFormIterator>
                <TextInput/>
                </SimpleFormIterator>
            </ArrayInput>
            <NumberInput source="god_ref" />
            <ArrayInput source="sloka">
            <SimpleFormIterator>
                <TextInput/>
                </SimpleFormIterator>
            </ArrayInput>
            <ArrayInput source="festivals">
            <SimpleFormIterator>
                <TextInput/>
                </SimpleFormIterator>
            </ArrayInput>
            <ArrayInput source="reference_links">
            <SimpleFormIterator>
                <TextInput/>
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Create>
);

export default AvatarCreate;