import axios from 'axios';

const getList = async (url) =>
    await axios
        .get(url)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
        });

export { getList };
