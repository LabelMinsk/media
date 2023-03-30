import {useRemovePhotoMutation} from "../../store";

function PhotoListItem ({photo}){
    const [removePhoto] = useRemovePhotoMutation();

    const handleDeletePhoto = (photo)=>{
        removePhoto(photo);
    }

    return (
        <figure onClick={()=>handleDeletePhoto(photo)} className={'relative m-2'}>
            <img className={'h-20 w-20'} alt={photo.albumId} src={photo.url} />
            <div className={'absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80'}>
                Delete
            </div>
        </figure>

    )
}

export default PhotoListItem;