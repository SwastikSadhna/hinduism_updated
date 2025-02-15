import { Create, ImageInput, Show, SimpleForm, SimpleFormIterator, ArrayInput, TextInput } from 'react-admin';

const SlokaCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="title" />
            <TextInput source="sloka" />
            <TextInput source="explaination" />
            <ImageInput source="image" />
            <TextInput source="description" />
            <ArrayInput source="keyword">
                <SimpleFormIterator>
                    <TextInput source="keyword" />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Create>
);
export default SlokaCreate;