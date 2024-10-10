import { StructuredType } from "typescript";
import { TokenRequestFields } from "./tokenrequest"

export interface CommonPageProps {
    commonNextHandler: () => void;
    updateRequest: (requestFields: TokenRequestFields) => void;
    tokenRequest: TokenRequestFields;
    updateToken: (token: string) => void;
    tokenValue : string;
    updateArticleContent : (content : string) => void;
}

export interface OnBoardPropsWrapped {
    commonPageProps: CommonPageProps;
}