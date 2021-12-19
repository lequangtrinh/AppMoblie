import {dataPost}from '../data/Data'
const SaveData=()=>{
    console.log(dataPost)
    fetch('https://gorest.co.in/public-api/users', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 62ddfa7559d5fdec64517e3ab70ee4fd60b2244e71fa042a44f914f8fa688263'
        },
        body: JSON.stringify({
            name: '',
            gender: '',
            email: '',
            status: '',
        })
      });
      return 1;
}
export default SaveData()