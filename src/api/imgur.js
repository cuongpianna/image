import qs from 'qs';
import axios from 'axios';
import { promises } from 'fs';

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
    },
    fetchImages(token){
        return axios.get(`${ROOT_URL}/3/account/cuongpianna/images`, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
    },
    uploadImages(images, token){
        const promises = Array.from(images).map(image => {
            var formData = new FormData();
            formData.append('image', image);

            return axios.post(`${ROOT_URL}/3/image`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        });

        return Promise.all(promises)
    }
}