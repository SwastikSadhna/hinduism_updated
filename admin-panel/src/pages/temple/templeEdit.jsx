import { 
    Edit, 
    FileInput, 
    FileField, 
    SimpleForm, 
    TextInput, 
    ArrayInput, 
    SimpleFormIterator 
} from 'react-admin';

const TempleEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="description" />
            <FileInput source="cover_image" label="Cover Image" accept="image/*">
                <FileField source="src" title="title" />
            </FileInput>
            <TextInput source="map_url" />
            <TextInput source="god" />
            <TextInput source="location" />

            <ArrayInput source="images">
                <SimpleFormIterator>
                    <FileInput source="file" label="Image" accept="image/*">
                        <FileField source="src" title="title" />
                    </FileInput>
                </SimpleFormIterator>
            </ArrayInput>

            <ArrayInput source="reference_link">
                <SimpleFormIterator>
                    <TextInput source="reference" />
                </SimpleFormIterator>
            </ArrayInput>

            <ArrayInput source="keyword">
                <SimpleFormIterator>
                    <TextInput source="word" />
                </SimpleFormIterator>
            </ArrayInput>

            {/* 🔹 Fully Flexible Importance Field */}
            <ArrayInput source="importance">
                <SimpleFormIterator>
                    {/* Field Name (User Defines the Key) */}
                    <TextInput 
                        source="key" 
                        label="Field Name" 
                        placeholder="Enter field name (e.g., History, Rituals, Architecture)" 
                        fullWidth 
                    />

                    {/* Field Value (User Defines Content) */}
                    <TextInput 
                        source="text" 
                        label="Field Value" 
                        placeholder="Enter value for the field" 
                        fullWidth 
                        multiline 
                    />

                    {/* Additional Description Input */}
                    <TextInput 
                        source="description" 
                        label="Description" 
                        placeholder="Enter detailed description" 
                        fullWidth 
                        multiline 
                    />

                    {/* Optional File Upload */}
                    <FileInput 
                        source="file" 
                        label="Attach File (Optional)" 
                        accept="image/*"
                    >
                        <FileField source="src" title="title" />
                    </FileInput>
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>
);

export default TempleEdit;
