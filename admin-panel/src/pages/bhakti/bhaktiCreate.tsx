import { ArrayInput, Create, SimpleFormIterator, ReferenceInput, SimpleForm, TextInput, SelectInput, ImageInput, FileInput } from "react-admin";

const bhaktiCreate = () => {
    return (<Create>
        <SimpleForm>
            <TextInput source="title" />
            <TextInput source="description" />
            <ArrayInput source="keywords">
                <SimpleFormIterator>
                    <TextInput source="keywords" />
                </SimpleFormIterator>
            </ArrayInput>
            <ImageInput source="image" />
            <FileInput source="file" />
            <TextInput source="author" />
            <ArrayInput source="reference_links">
                <SimpleFormIterator>
                    <TextInput />
                </SimpleFormIterator>
            </ArrayInput>
            <TextInput source="content" />
            <ReferenceInput source="category" reference="bhakti-categories" >
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>)
}

export default bhaktiCreate;