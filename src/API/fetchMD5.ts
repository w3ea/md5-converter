const rest7BaseURL = 'http://api.rest7.com/v1/text_hash.php';
const hashifyBaseURL = 'https://api.hashify.net/hash/md5/hex';

type Response = {
    hash?: string,
    Digest?: string,
    success: number
};
const fetchMD5 = async (url: string): Promise<Response> => {
    try {
        const response = await fetch(url);
        if (! response.ok) {
            throw new Error('Something went wrong');
        }

        return await response.json();
    } catch (e) {
        console.log(e.message);
        window.alert('There was an error trying to convert your text. Please try again later'); // eslint-disable-line no-alert
        return { success: 0 };
    }
};

export const fetchByRest7 = async (text: string):Promise<Response> => fetchMD5(`${rest7BaseURL}?algo=md5&text=${text}`);

export const fetchByHashify = async (text: string):Promise<Response> => {
    const { Digest } = await fetchMD5(`${hashifyBaseURL}?value=${text}`);

    if (Digest) {
        return { hash: Digest, success: 1 };
    }

    return { success: 0 };
};