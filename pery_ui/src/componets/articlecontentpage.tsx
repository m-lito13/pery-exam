import { Box, Button, createTheme, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from "@mui/material";
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
    function handleClick() {
        ;
    }

    return (
        <FormControl>
            <Box
                component="img"
                sx={{
                    height: 233,
                    width: 350,
                    maxHeight: { xs: 233, md: 167 },
                    maxWidth: { xs: 350, md: 250 },
                }}
                src="/all_done.png"
                alt="image"
            />
            <Typography style={{ fontFamily: 'Poppins', textAlign: "left" }}>
                <label><h3>All set. Here’s your article:</h3></label>
            </Typography>
            <Typography style={{ fontFamily: 'Poppins', textAlign: "left" }}>
                <pre>
                    {props.articleContent}
                </pre>
            </Typography>
            <Button variant="contained" onClick={() => handleClick()}>Start Over</Button>
        </FormControl>
    );
}

export default ArticleContentPage;