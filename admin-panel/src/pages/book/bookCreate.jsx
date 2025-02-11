import { ArrayInput, SimpleFormIterator, SimpleForm, TextInput,  Edit } from "react-admin";

const bookCreate = () => {
    return (<Edit>
        <SimpleForm>
        <TextField source="id" />
            <TextField source="title" />
            <TextField source="description" />
            <TextField source="link" />
            <TextField source="author" />
            <TextField source="image" />
            <TextField source="cover_image" />
            <TextField source="year" />
            <ArrayInput source="keyword">
                <SimpleFormIterator>
                    <TextInput source="keyword" />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>)
}

export default bookCreate;