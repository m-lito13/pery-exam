import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { useState } from "react";
import { CommonPageProps, OnBoardPropsWrapped } from "./commonpageprops";
import { TokenRequestFields } from "./tokenrequest";
import { ArticleContentProps } from "./articlecontentprops";


function ArticleContentPage(props: ArticleContentProps) {
    const [languageValueFromControl, setValue] = useState('en');
    function handleClick() {
        ;
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };

    return (
        <div className="App">
            <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">Article Content</FormLabel>
                <TextField value={props.articleContent}></TextField>
            </FormControl>
            <Button variant="contained" onClick={() => handleClick()}>Continue</Button>
        </div>
    );
}

export default ArticleContentPage;