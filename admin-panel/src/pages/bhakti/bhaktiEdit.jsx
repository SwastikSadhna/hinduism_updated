import {Edit, SimpleForm, TextInput, ReferenceInput, NumberInput} from "react-admin"

const bhaktiEdit = () => (
  <Edit>
    <SimpleForm>
            <ReferenceInput source="id" reference="bhakti" />
            <TextInput source="title" />
            <TextInput source="description" />
            <TextInput source="keyword" />
            <TextInput source="image" />
            <TextInput source="author" />
            <TextInput source="reference_links" />
            <TextInput source="content" />
            <NumberInput source="category" />
    </SimpleForm>
  </Edit>
);

export default bhaktiEdit;