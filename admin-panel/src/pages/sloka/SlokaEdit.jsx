import { Edit, ImageInput, Show, SimpleForm, SimpleFormIterator, ArrayInput, TextInput } from 'react-admin';

const SlokaEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="title" />
            <TextInput source="sloka" />
            <TextInput source="explaination" />
            <ImageInput source="image" />
            <TextInput source="description" />
            <ArrayInput source="keyword">
                <SimpleFormIterator>
                    <TextInput/>
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>
);

export default SlokaEdit;