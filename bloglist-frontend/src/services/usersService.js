import axios from 'axios';
const baseUrl = 'http://localhost:3003/api/users';

const getAll = async () => {
    console.log('get users');
    const response = await axios.get(baseUrl);
    return response.data;
};

export default { getAll };