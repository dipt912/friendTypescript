export const fetchRobots = () => {
    try{
       return  fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())

    } catch (err) {
        throw err;
    }
}