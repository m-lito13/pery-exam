import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { useState } from "react";
import { CommonPageProps, OnBoardPropsWrapped } from "./commonpageprops";
import { TokenRequestFields } from "./tokenrequest";
import { common } from "@mui/material/colors";
import { getArticleByName } from "../services/apiservice";


function ArticleSelectPage(props: OnBoardPropsWrapped) {
    const [articleNameFromControl, setArticleName] = useState('');
    const {userName , language} = {...props.commonPageProps.tokenRequest};
    async function handleClick() { 
        let tokenString : string= props.commonPageProps.tokenValue;
        let artcileContent = await getArticleByName(articleNameFromControl, language, props.commonPageProps.tokenValue);
        props.commonPageProps.updateArticleContent(artcileContent);
        props.commonPageProps.commonNextHandler();
    }

    const handleArticleNameChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setArticleName(event.currentTarget.value);
    };

    return (
        <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">What would you like to read about?</FormLabel>
            <FormLabel id="demo-controlled-radio-buttons-group">Dogs? molecular culinary? everything goes...</FormLabel>
            <FormLabel id="demo-controlled-radio-buttons-group">Article Subject</FormLabel>
            <TextField id="outlined-basic" variant="outlined" onChange={handleArticleNameChanged} />
            <Button variant="contained" onClick={() => handleClick()}>Continue</Button>
        </FormControl>
    );
}

export default ArticleSelectPage;