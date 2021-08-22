import axios from 'axios'

async function getData(Number) {
    const { data: user1 } = await axios("https://jsonplaceholder.typicode.com/users/" + Number)
    const { data: user2 } = await axios("https://jsonplaceholder.typicode.com/posts?id=" + Number)
    
}

export default getData;