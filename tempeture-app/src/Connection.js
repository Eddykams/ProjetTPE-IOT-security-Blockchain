function searchfromphp() {
  return new Promise((resolve,reject) => {
    return fetch(`/api/tempeture/`, {
      accept: "application/json"
    })
    .then(parseJSON)
    .then(data => resolve(data));
  })
}
function search(query, cb) {
    return new Promise((resolve,reject) => {
      return fetch(`/api/${query}`, {
        accept: "application/json"
      })
        .then(parseJSON)
        .then(data => resolve(data));
    })
  
  }
  function create(type, data){
      return new Promise((resolve, reject) => {
        return fetch(`/api/${type}`, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: 'post',
          body: JSON.stringify(data)
        })
        .then(parseJSON)
        .then(() => resolve())
      })
    }
    function parseJSON(response) {
      console.log(response);
      return response.json();
      
    }
    const Connection = {searchfromphp, search, create };
  
    export default Connection;