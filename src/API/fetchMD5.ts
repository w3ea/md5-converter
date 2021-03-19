const baseURL = 'https://api.hashify.net/hash/md5/hex';

type Response = {
    hash?: string,
    success: number
};
const fetchMD5 = async (text: string): Promise<Response> => {
    try {
        const response = await fetch(`${baseURL}?value=${text}`);
        if (! response.ok) {
            throw new Error('Something went wrong');
        }

        const { Digest } = await response.json();

        return { hash: Digest, success: 1 };
    } catch (e) {
        console.log(e.message);
        window.alert('There was an error trying to convert your text. Please try again later'); // eslint-disable-line no-alert
        return { success: 0 };
    }
};

export default fetchMD5;