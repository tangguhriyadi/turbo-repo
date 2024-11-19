import React, { useCallback } from "react";
import { useLazyUserQuery } from "@/apis/userApi";
import { LoadingButton } from "@mui/lab";

const FetchDataButton: React.FC = () => {
    const [trigger, { isFetching }] = useLazyUserQuery();

    const handleClick = useCallback(async () => {
        trigger({});
    }, [trigger]);

    return (
        <LoadingButton
            loading={isFetching}
            variant="contained"
            onClick={handleClick}
        >
            Fetch Data
        </LoadingButton>
    );
};

export default FetchDataButton;
