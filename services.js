
function processGet(response){
    console.log(response);
    return response;
}



const CopeteServices = {
    findProducts : async function(){
        return await  axios({
            url: 'https://test8.free.beeceptor.com/',
            method: 'get',
            headers: {'Content-type': 'application/json; charset=UTF-8'},
            data: 'dsfdsf'
            }).then(processGet, processGet);
    } 
}


