import { NumberInput, Create, TextInput, SimpleForm, ImageInput } from 'react-admin';

const AvatarCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" />
            <ImageInput source="image" />
            <TextInput source="yuga" />
            <TextInput source="books" />
            <TextInput source="description" />
            <TextInput source="festival" />
            <TextInput source="tamples" />
            <NumberInput source="god_ref" />
            <TextInput source="sloka" />
            <TextInput source="festivals" />
            <TextInput source="reference_links" />
        </SimpleForm>
    </Create>
);

export default AvatarCreate;