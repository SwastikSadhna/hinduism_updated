import { ArrayInput, Edit, SimpleFormIterator, ReferenceInput, SimpleForm, TextInput, SelectInput, ImageInput } from "react-admin";

const bookEdit = () => {
    return (<Edit>
        <SimpleForm>
            <TextInput source="title" />
            <TextInput source="description" />
            <TextInput source="link" />
            <TextInput source="author" />
            <ImageInput source="image" />
            <ImageInput source="cover_image" />
            <TextInput source="year" />
            <ArrayInput source="keyword">
                <SimpleFormIterator>
                <TextInput/>
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>)
}

export default bookEdit;