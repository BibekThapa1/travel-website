class ApiCall{

    commonUrl = "http://localhost:8000/api/v1"

    constructor(backendRoute = ""){
        this.backendRoute = backendRoute;
    }
    async fetchData(route){
   let response = await fetch(`${this.commonUrl}${route}`);
   let data = await response.json()
   return data.data;
    }
}

const apiCall = new ApiCall();
export default apiCall;