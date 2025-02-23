import { ArrayInput, Create, SimpleFormIterator, ReferenceInput, SimpleForm, TextInput, SelectInput } from "react-admin";

const bookEdit = () => {
    return (<Create>
        <SimpleForm>
            <TextField source="title" />
            <TextField source="description" />
            <TextField source="link" />
            <TextField source="author" />
            <TextField source="image" />
            <TextField source="cover_image" />
            <TextField source="year" />
            <ArrayInput source="keyword">
                <SimpleFormIterator>
                <TextInput/>
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Create>)
}

export default bookEdit;