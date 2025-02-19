import { ReferenceInput, Edit, SimpleForm, TextInput } from 'react-admin';

const GranthitemEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="title" />
            <TextInput source="description" />
            <TextInput source="image" />
            <TextInput source="link" />
            <ReferenceInput source="granth_id" reference="granths" />
            <TextInput source="author" />
            <TextInput source="year" />
        </SimpleForm>
    </Edit>
);

export default GranthitemEdit;