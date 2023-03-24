import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addUser, fetchUsers} from '../../store'
import {Skeleton} from "../Loader/Skeleton";
import Button from "../UI/Button/Button";

const UsersList = () => {
    const [isLoadingUsers, setIsLoadingUsers] = useState(false);
    const [loadingUsersError, setLoadingUsersError] = useState(null);
    const [isCreatingUser, setIsCreatingUser] = useState(false);
    const [creatingUserError, setCreatingUserError] = useState(null)

    const dispatch = useDispatch();

    const { usersDataList} = useSelector((state) => {
        return state.users;
    })

    const handleAddUser = ()=>{
        setIsCreatingUser(true)
        dispatch(addUser())
            .unwrap()
            .catch(err => setCreatingUserError(err))
            .finally(()=>setIsCreatingUser(false))
    }

    useEffect(() => {
        setIsLoadingUsers(true)
        dispatch(fetchUsers())
            .unwrap()
            .catch((err)=>setLoadingUsersError(err))
            .finally(()=>setIsLoadingUsers(false))
    }, [dispatch])

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