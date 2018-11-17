import qs from 'qs';

const CLIENT_ID = '4913c42621f4171';
const ROOT_URL = 'https://api.imgur.com'

export default{
    login(){
        const querystring = {
            client_id: CLIENT_ID,
            response_type: 'token',
        };
        window.location.href = `${ROOT_URL}/oauth2/authorize?${qs.stringify(
            querystring
            )}`;

        // window.open(`${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`);
    }
}