import { Box, Button, Container, TextField, Typography } from "@mui/material";
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
        
            <ThemeProvider theme={theme}>
                <Grid container direction ="row" style={{ display: 'flex' }}spacing={2} wrap='nowrap' sx={{ width: '100%' }}>
                    <Grid>
                        <Box height='100%'>
                            <Typography component="div" style={{ backgroundColor: '#cfe8fc' }}>
                                Welcome to Pery
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid size={5}>
                        <div>
                            <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={handleUserNameChanged} />
                            <Button variant="contained" onClick={() => handleClick()}>Continue</Button>
                        </div>
                    </Grid>
                </Grid>
            </ThemeProvider> 
            

    );
}

export default OnBoardPage1;