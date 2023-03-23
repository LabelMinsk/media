import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from '../../store'
import {Skeleton} from "../Loader/Skeleton";
const UsersList = () =>{
    const dispatch = useDispatch();
    const {isLoading, usersDataList, error} = useSelector((state)=>{
        return state.users;
    })

    useEffect(()=>{
        dispatch(fetchUsers())
    },[dispatch])

    if(isLoading){
        return  (<Skeleton times={6} classNameProp={'h-10 w-full'}/> )
    }
    if (error){
        return (<div>{error.message}</div> )
    }
    return <div>
        {usersDataList.length}
    </div>
}

export default UsersList;