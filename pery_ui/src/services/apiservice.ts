const BASE_URL = 'http://localhost:3001';
export let generateUserToken = async function (user: string, language: string): Promise<string> {
    try {
        let requestUrl = `${BASE_URL}/user`;
        let requestBody = { userName: user, language: language };
        let strJson = JSON.stringify(requestBody);
        let response = await fetch(requestUrl, {
            method: 'POST', body: strJson, headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });
        let jsonData = await response.json();
        let result = JSON.parse(JSON.stringify(jsonData));
        return result;
    }
    catch (err) {
        console.log(err);
        return '';
    }
}

export let getArticleByName = async function (articleName: string, language: string, requestToken: string): Promise<string> {
    try{ 
        let requestUrl = `${BASE_URL}/introduction/${articleName}`;
        let response = await fetch(requestUrl, {
            method: 'GET', headers: {
                'AcceptAccept-Language': language,
                'x-authentication': requestToken
            }
        });
        let jsonData = await response.json();
        let result = JSON.parse(JSON.stringify(jsonData));
        return result;
    }
    catch(err) { 
        console.log(err);
        return '';
    }
   
}

// export default generateUserToken;
