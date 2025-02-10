import { Show, SimpleShowLayout, TextField } from 'react-admin';
import {useAuth} from '../auth/AuthProvider';

const BookShow = () => {
    const {hasPermission} = useAuth();

    return (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="description" />
            <TextField source="link" />
            <TextField source="author" />
            <TextField source="image" />
            <TextField source="cover_image" />
            <TextField source="keyword" />
            <TextField source="year" />
        </SimpleShowLayout>
    </Show>
);}

export default BookShow;