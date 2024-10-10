import { Button, createTheme, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { CommonPageProps, OnBoardPropsWrapped } from "./commonpageprops";
import { TokenRequestFields } from "./tokenrequest";
import { ArticleContentProps } from "./articlecontentprops";

const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          contained: {
            padding: "10px 20px",
            fontSize: "16px",
            fontWeight: "500"
          }
        }
      }
    }
  });


function ArticleContentPage(props: ArticleContentProps) {



    const [languageValueFromControl, setValue] = useState('en');
    function handleClick() {
        ;
    }

    return (
        <div className="App">
                <label>Article content</label>
                <Typography>
                    <pre style={{ fontFamily: 'Gazpacho' , textAlign : "left"}}>
                        {props.articleContent}
                    </pre>
                </Typography>
            <Button variant="contained" onClick={() => handleClick()}>Start Over</Button>
        </div>
    );
}

export default ArticleContentPage;