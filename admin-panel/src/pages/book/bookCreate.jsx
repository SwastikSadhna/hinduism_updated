import { ArrayInput, SimpleFormIterator, SimpleForm, TextInput,  Create, ImageInput } from "react-admin";

const bookCreate = () => {
    return (<Create>
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
                    <TextInput source="keyword" />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Create>)
}

export default bookCreate;