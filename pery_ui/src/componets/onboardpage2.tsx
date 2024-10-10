import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";
import {generateUserToken} from '../services/apiservice';
import { useState } from "react";
import { CommonPageProps, OnBoardPropsWrapped } from "./commonpageprops";
import { TokenRequestFields } from "./tokenrequest";


function OnBoardPage2(props: OnBoardPropsWrapped) {
    const [languageValueFromControl, setValue] = useState('en');
    async function handleClick() {
        let currentRequest: TokenRequestFields = props.commonPageProps.tokenRequest;
        let updatedRequest = { userName: currentRequest.userName, language: languageValueFromControl } as TokenRequestFields;
        props.commonPageProps.updateRequest(updatedRequest);

        let generatedToken = await generateUserToken(updatedRequest.userName, updatedRequest.language);
        props.commonPageProps.updateToken(generatedToken);
        props.commonPageProps.commonNextHandler();
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };

    return (
        <div className="App">
            <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">Language</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={languageValueFromControl}
                    onChange={handleChange}
                >
                    <FormControlLabel value="en" control={<Radio />} label="English" />
                    <FormControlLabel value="es" control={<Radio />} label="Spanish" />
                    <FormControlLabel value="nl" control={<Radio />} label="Dutch" />
                </RadioGroup>
            </FormControl>
            <Button variant="contained" onClick={() => handleClick()}>Continue</Button>
        </div>
    );
}

export default OnBoardPage2;