import {Edit, SimpleForm, TextInput, ReferenceInput,ArrayInput, SimpleFormIterator, NumberInput} from "react-admin"

const bhaktiEdit = () => (
  <Edit>
    <SimpleForm>
    <TextInput source="title" />
            <TextInput source="description" />
            <ArrayInput source="keywords">
                <SimpleFormIterator>
                    <TextInput source="keywords" />
                </SimpleFormIterator>
            </ArrayInput>
            <TextInput source="image" />
            <TextInput source="author" />
            <ArrayInput source="reference_links">
                <SimpleFormIterator>
                    <TextInput source="reference_links" />
                </SimpleFormIterator>
            </ArrayInput>
            <TextInput source="content" />
            <ReferenceInput source="category" reference="bhakti/categories"/>
    </SimpleForm>
  </Edit>
);

export default bhaktiEdit;