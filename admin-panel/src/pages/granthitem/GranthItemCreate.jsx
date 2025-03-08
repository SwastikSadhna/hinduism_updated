import { ReferenceInput, Create, SimpleForm, TextInput } from 'react-admin';

const GranthitemCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="title" />
            <TextInput source="description" />
            <TextInput source="image" />
            <TextInput source="link" />
            <ReferenceInput source="granth_id" reference="granth" />
            <TextInput source="author" />
            <TextInput source="year" />
        </SimpleForm>
    </Create>
);

export default GranthitemCreate;