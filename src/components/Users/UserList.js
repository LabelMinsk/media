import {useEffect} from "react";
import {useSelector} from "react-redux";
import {addUser, fetchUsers} from '../../store'
import {useThunk} from "../../hooks/use-thunk";
import {Skeleton} from "../Loader/Skeleton";
import Button from "../UI/Button/Button";
import UsersListItem from "./UsersListItem";



const UsersList = () => {
    const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers)
    const [doAddUsers, isCreatingUser, creatingUserError] = useThunk(addUser);

    const {usersDataList} = useSelector((state) => {
        return state.users;
    })

    const handleAddUser = () => {
        return doAddUsers()
    }

    useEffect(() => {
        doFetchUsers()
    }, [doFetchUsers])


    let content;
    if (isLoadingUsers) {
        content = (<Skeleton times={6} classNameProp={'h-10 w-full'}/>)
    } else if (loadingUsersError) {
        content = (<div>loadingUsersError.message</div>)
    } else {
        content = usersDataList.map(user => {
            return (<>
                <UsersListItem key={user.id} user={user}/>
            </>)
        })
    }

    return (<div>
        <div className="flex flex-row justify-between items-center m-3">
            <h1 className={'m-2 text-xl'}>Users</h1>
            <Button loading={isCreatingUser} primary onClick={handleAddUser}>+Add user</Button>
            {creatingUserError && 'Error creating user...'}
        </div>
        {content}
    </div>)
}

export default UsersList;