import {useFetchAlbumsQuery, useAddAlbumMutation} from "../../store";
import {Skeleton} from "../Loader/Skeleton";
import Button from "../UI/Button/Button";
import AlbumsListItem from "./AlbumsListItem";

function AlbumsList({user}) {
    const {data, error, isLoading} = useFetchAlbumsQuery(user);
    const [addAlbum, results] = useAddAlbumMutation()

    const handleAddAlbum = (user) => {
        addAlbum(user);
    }

    let content;

    if (isLoading) {
        content = (<Skeleton times={3}/>)
    } else if (error) {
        content = (<div>Error loading albums.</div>)
    } else {
        content = data.map(album => {
           return <AlbumsListItem key={album.id} album={album}/>
        })
    }


    return (
        <div>
            <div className={'m-2 flex flex-row items-center justify-between'}>
                <div className={'text-lg font-bold'}>
                    Albums for {user.name}
                </div>
                <Button
                    secondary
                    loading={results.isLoading}
                    onClick={() => handleAddAlbum(user)}>
                    +Add album
                </Button>
            </div>
            <div>{content}</div>
        </div>
    )

}

export default AlbumsList;