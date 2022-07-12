const url = 'https://jsonplaceholder.typicode.com/users';

export const getUsers = async() => {
    try {
        const res =  await fetch(url);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}