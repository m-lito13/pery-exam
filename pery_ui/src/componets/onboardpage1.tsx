import { Box, Button, Container, FormControl, FormLabel, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { CommonPageProps, OnBoardPropsWrapped } from "./commonpageprops";
import { TokenRequestFields } from "./tokenrequest";
import Grid from '@mui/material/Grid2';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


//import '../styles/common.css';
const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                contained: {
                    padding: "10px 20px",
                    fontSize: "16px",
                    fontWeight: "500",
                    backgroundColor: "#7D6DF6",
                    border: "1px",
                    borderRadius: "8px",
                    width: "169px",
                    height: "49px"
                }
            }
        }
    }
});

function OnBoardPage1(props: OnBoardPropsWrapped) {
    let [tokenRequest, setTokenRequest] = useState({});
    let [userNameFromText, setUserName] = useState('');

    function handleClick() {
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
        <FormControl>
            <FormLabel>Love learning new stuff?
                get an article on any subject you like!
            </FormLabel>
            <FormLabel>Type your email address</FormLabel>
            <TextField id="outlined-basic" variant="outlined" onChange={handleUserNameChanged} />
            <Button variant="contained" onClick={() => handleClick()}>Continue</Button>
        </FormControl>

    );
}

export default OnBoardPage1;