import { useState } from "react";
import OnBoardPage1 from "./onboardpage1";
import OnBoardPage2 from "./onboardpage2";
import { TokenRequestFields } from "./tokenrequest";
import { CommonPageProps, OnBoardPropsWrapped } from "./commonpageprops";
import ArticleSelectPage from "./articleselectpage";
import ArticleContentPage from "./articlecontentpage";


function OnBoard() {
    let [currentStep, setCurrentDisplay] = useState(0);
    let [tokenRequestData, setTokenRequestData] = useState({} as TokenRequestFields);
    let [generatedToken, setGeneratedToken] = useState('');
    let [artcileContent, setArtcileContent] = useState('');

    async function handleContinueClick() {
        let currentStepUpd = currentStep+1;
        setCurrentDisplay(currentStepUpd);
    }

    function updateRequestBody(requestBodyToSet : TokenRequestFields) {
        setTokenRequestData(requestBodyToSet);
    }

    function updateGeneratedToken(tokenToSet : string) { 
        setGeneratedToken(tokenToSet);
    }

    function updateArticleContent(contentToSet : string) { 
        setArtcileContent(contentToSet);
    }

    let commonProps: CommonPageProps = {
        commonNextHandler : handleContinueClick, 
        tokenRequest : tokenRequestData, 
        updateRequest : updateRequestBody,
        updateToken : updateGeneratedToken,
        tokenValue : generatedToken,
        updateArticleContent : updateArticleContent
    };
    let onBoardFormProps : OnBoardPropsWrapped = {commonPageProps : commonProps}

    return (
        <div>
            {currentStep === 0 && <OnBoardPage1 commonPageProps={onBoardFormProps.commonPageProps}></OnBoardPage1>}
            {currentStep === 1 && <OnBoardPage2 commonPageProps={onBoardFormProps.commonPageProps}></OnBoardPage2>}
            {currentStep === 2 && <ArticleSelectPage commonPageProps={onBoardFormProps.commonPageProps}></ArticleSelectPage>}
            {currentStep === 3 && <ArticleContentPage articleContent={artcileContent}></ArticleContentPage>}
        </div>
    );
}

export default OnBoard;