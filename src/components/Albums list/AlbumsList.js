import {useFetchAlbumsQuery, useAddAlbumMutation} from "../../store";
import {Skeleton} from "../Loader/Skeleton";
import ExpandablePanel from "../UI/ExpandablePanel/ExpandablePanel";
import Button from "../UI/Button/Button";

function AlbumsList({user}) {
    const {data, error, isLoading} = useFetchAlbumsQuery(user.id);
    const [addAlbum, results] = useAddAlbumMutation()

    const handleAddAlbum = (userId) => {
        addAlbum(userId);
    }

    let content;

    if (isLoading) {
        content = (<Skeleton times={3}/>)
    } else if (error) {
        content = (<div>Error loading albums.</div>)
    } else {
        content = data.map(album => {
            const header = <div>{album.title}</div>
            return (<ExpandablePanel key={album.id} header={header}>
                List of photos in the album
            </ExpandablePanel>)
        })
    }


    return (
        <div>
            <div className={'flex justify-between'}>
                Albums for {user.name}
                <Button
                    secondary
                    onClick={()=>handleAddAlbum(user.id)}>
                    +Add album
                </Button>
            </div>
            <div>{content}</div>
        </div>
    )

}

export default AlbumsList;