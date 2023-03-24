import {useEffect, useState, useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addUser, fetchUsers} from '../../store'
import {Skeleton} from "../Loader/Skeleton";
import Button from "../UI/Button/Button";

const useThunk = (thunk)=>{
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    const runThunk = useCallback(()=>{
        setIsLoading(true)
        dispatch(thunk())
            .unwrap()
            .catch((err)=>setError(err))
            .finally(()=>setIsLoading(false))
    },[dispatch,thunk])

    return [runThunk, isLoading, error]
}

const UsersList = () => {
    const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers)
    const [doAddUsers, isCreatingUser, creatingUserError] = useThunk(addUser)

    const { usersDataList} = useSelector((state) => {
        return state.users;
    })

    const handleAddUser = ()=>{
        return doAddUsers()
    }

    useEffect(() => {
        doFetchUsers()
    }, [doFetchUsers])

    if (isLoadingUsers) {
        return (<Skeleton times={6} classNameProp={'h-10 w-full'}/>)
    }
    if (loadingUsersError) {
        return (<div>loadingUsersError.message</div>)
    }

    const renderedUsersList = usersDataList.map(user => {
        return (
            <div key={user.id} className={'mb-2 border rounded'}>
                <div className="flex p-2 justify-between items-center cursor-pointer">
                    {user.name}
                </div>
            </div>)
    })

    return (<div>
        <div className="flex flex-row justify-between m-3">
            <h1 className={'m-2 text-xl'}>Users</h1>
            {
                isCreatingUser
                    ? 'Creating user...'
                    : <Button primary onClick={handleAddUser}>+Add user</Button>
            }
            {creatingUserError && 'Error creating user...'}
        </div>
        {renderedUsersList || 'List of users are empty'}
    </div>)
}

export default UsersList;