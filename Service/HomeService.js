import Utility from './Utility'
//import Communication from react-sldkfdjkdjf

class HomeService {

  static getHomeDataList(){
   return Utility.getDataFromServer('homeitems').then((result) => HomeService.changingJson(result))
  }

  static changingJson(responseJson){
    //********** do whatevery is needed **************
    console.log(responseJson[0]);
    responseJson.forEach((item)=> {
      item.testObj = 'hello'
    })
    return responseJson
  }
}

export default HomeService
