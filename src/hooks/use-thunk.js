import {useCallback, useState} from "react";
import {useDispatch} from "react-redux";

export const useThunk = (thunk)=>{
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState(null);
    const dispatch = useDispatch();

    const runThunk = useCallback((arg)=>{
        setIsLoading(true);
        dispatch(thunk(arg))
            .unwrap()
            .catch(err => setErr(err))
            .finally(()=>setIsLoading(false))

    },[dispatch, thunk])
    return [runThunk, isLoading, err]
}
