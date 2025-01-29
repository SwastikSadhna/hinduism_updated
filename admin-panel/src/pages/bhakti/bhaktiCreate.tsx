import { Create, NumberInput, ReferenceInput, SimpleForm, TextInput } from "react-admin";

const bhaktiCreate = () => {
    return (<Create>
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
    </Create>)
}

export default bhaktiCreate;