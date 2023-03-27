import Button from "../UI/Button/Button";
import {removeUser} from "../../store";
import {useThunk} from "../../hooks/use-thunk";
import ExpandablePanel from "../UI/ExpandablePanel";

function UsersListItem({user}) {
    const [doRemoveUser, isLoading, error] = useThunk(removeUser);

    const handleClickRemove = (user) => {
        doRemoveUser(user)
    }

    const header = (
        <>
            <Button className={'mr-3'} loading={isLoading} onClick={() => handleClickRemove(user)}>
                <p>Delete</p>
            </Button>
            {error && <div>Error deleting user.</div>}
            {user.name}
        </>
    );

    return (
        <ExpandablePanel header={header}>
            CONTENT!!!
        </ExpandablePanel>

    )
}

export default UsersListItem;