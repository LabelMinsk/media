import ExpandablePanel from "../UI/ExpandablePanel/ExpandablePanel";
import Button from "../UI/Button/Button";
import {useRemoveAlbumMutation} from "../../store";
import PhotosList from "../PhotosList/PhotosList";


function AlbumsListItem({album}) {
    const [removeAlbum, results] = useRemoveAlbumMutation();

    const handleRemoveAlbumById = (album) => {
        removeAlbum(album)
    }

    const header = (<>
        <Button
            loading={results.isLoading}
            onClick={() => handleRemoveAlbumById(album)}
            warning
        >Delete</Button>
        {album.title}
    </>);

    return (<>
        <ExpandablePanel key={album.id} header={header}>
            <PhotosList album={album}/>
        </ExpandablePanel>
    </>)
}

export default AlbumsListItem;