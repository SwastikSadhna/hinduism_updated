import {Edit, SimpleForm, TextInput, ReferenceInput,ArrayInput, SimpleFormIterator, NumberInput, ImageInput} from "react-admin"

const BhaktiEdit = () => (
  <Edit>
    <SimpleForm>
    <TextInput source="title" />
            <TextInput source="description" />
            <ArrayInput source="keyword">
                <SimpleFormIterator>
                    <TextInput />
                </SimpleFormIterator>
            </ArrayInput>
            <ImageInput source="image" />
            <TextInput source="author" />
            <ArrayInput source="reference_links">
                <SimpleFormIterator>
                    <TextInput source="reference_links" />
                </SimpleFormIterator>
            </ArrayInput>
            <TextInput source="content" />
            <ReferenceInput source="category" reference="bhakti-categories"/>
    </SimpleForm>
  </Edit>
);

export default BhaktiEdit;