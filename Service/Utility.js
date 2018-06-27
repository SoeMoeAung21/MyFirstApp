import Config from './Config'
//import Communication from react-sldkfdjkdjf

class Utility {

  static getDataFromServer(endpoint){
    console.log(Config.server + endpoint);
    return fetch(Config.server + endpoint , {
          method : 'get',
          headers: {
              'Accept'      : 'application/json',
              'Content-Type': 'application/json'
          }
      })
    .then(result => result.json())
    .catch((error)=>{
      console.log(error);
    })
  }

  static example(x){
    return x+5
  }

  static downloadImage(imageUrl){
    //Communication.phonecall(phoneNumber, true)
  }
}

export default Utility
