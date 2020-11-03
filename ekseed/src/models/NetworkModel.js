import axios from "axios";

const URL = "https://rapidapi.p.rapidapi.com/odm-organizations";

const options = {
        method: 'GET',
        url: 'https://rapidapi.p.rapidapi.com/odm-organizations',
        headers: {
            'x-rapidapi-key': '7a73bcf8f9msh68192c2cb979b08p131cadjsnf3122ff2e4bb',
            'x-rapidapi-host': 'crunchbase-crunchbase-v1.p.rapidapi.com'
        }
    };

class NetworkModel {
    
    static show() {
        return fetch(URL, {
            method: 'GET',
            url: 'https://rapidapi.p.rapidapi.com/odm-organizations',
            headers: {
                'x-rapidapi-key': '7a73bcf8f9msh68192c2cb979b08p131cadjsnf3122ff2e4bb',
                'x-rapidapi-host': 'crunchbase-crunchbase-v1.p.rapidapi.com'
            }
        })
        .then((response) => response.json())
        .catch((err) => console.log(err));
    }
    
    static all = () => {
        const search = axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        }); 
    }

    // static all = () => {
    //     const request = axios.get(URL);
    //     return request;
    // }  

    // static all().then((res) => {
    //         console.log(res);
    //     };
    // render(){
    //     return (
    //         <div className="networkContainer">
    //             <h2>NetworkContainer</h2>
    //         </div>
    //     )
    // }
}

export default NetworkModel;


// const options = {
//   method: 'GET',
//   url: 'https://rapidapi.p.rapidapi.com/odm-organizations',
//   headers: {
//     'x-rapidapi-key': '7a73bcf8f9msh68192c2cb979b08p131cadjsnf3122ff2e4bb',
//     'x-rapidapi-host': 'crunchbase-crunchbase-v1.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// }); 