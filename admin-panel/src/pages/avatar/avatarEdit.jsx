import { NumberInput, Edit, TextInput, SimpleForm, ImageInput } from 'react-admin';

const AvatarEdit = () => (
    <Edit>
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
    </Edit>
);

export default AvatarEdit;