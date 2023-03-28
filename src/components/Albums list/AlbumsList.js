import {useFetchAlbumsQuery} from "../../store";
import {Skeleton} from "../Loader/Skeleton";
import ExpandablePanel from "../UI/ExpandablePanel/ExpandablePanel";

function AlbumsList({user}) {
    const {data, error, isLoading} = useFetchAlbumsQuery(user.id);

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
            {content}
        </div>
    )

}

export default AlbumsList;