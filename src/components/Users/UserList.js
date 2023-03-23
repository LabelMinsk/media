import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from '../../store'
const UsersList = () =>{
    const dispatch = useDispatch();
    const {isLoading, usersDataList, error} = useSelector((state)=>{
        return state.users;
    })

    useEffect(()=>{
        dispatch(fetchUsers())
    },[dispatch])

    if(isLoading){
        return  (<div>'Loading...'</div> )
    }
    if (error){
        return (<div>{error.message}</div> )
    }
    return <div>
        {usersDataList.length}
    </div>
}

export default UsersList;