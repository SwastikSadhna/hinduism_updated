import { NumberInput, Edit, TextInput, SimpleForm, ArrayInput, SimpleFormIterator,ImageInput } from 'react-admin';

const AvatarEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" />
            <ImageInput source="image" />
            <TextInput source="yuga" />
            <TextInput source="books" />
            <TextInput source="description" />
            <TextInput source="festival" />
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
    </Edit>
);

export default AvatarEdit;