const postAPI = (source, data) => {
    
    console.log(data)
    
    return fetch('/.netlify/functions/' + source, {
        method: 'post',
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .catch(err => err)
}

export default postAPI;