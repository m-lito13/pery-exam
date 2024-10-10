import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { CommonPageProps, OnBoardPropsWrapped } from "./commonpageprops";
import { TokenRequestFields } from "./tokenrequest";


function OnBoardPage1(props: OnBoardPropsWrapped) {
    let [tokenRequest, setTokenRequest] = useState({});
    let [userNameFromText, setUserName] = useState('');

    async function handleClick() {
        let currentRequest: TokenRequestFields = props.commonPageProps.tokenRequest;
        let updatedRequest = { userName: userNameFromText, language: currentRequest.language } as TokenRequestFields;
        props.commonPageProps.updateRequest(updatedRequest);

        if (props.commonPageProps.commonNextHandler) {
            props.commonPageProps.commonNextHandler();
        }
    }

    function handleUserNameChanged(event: React.ChangeEvent<HTMLInputElement>) {
        setUserName(event.currentTarget.value);
    }

    return (
        <div className="App">
            <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={handleUserNameChanged} />
            <Button variant="contained" onClick={() => handleClick()}>Continue</Button>
        </div>
    );
}

export default OnBoardPage1;