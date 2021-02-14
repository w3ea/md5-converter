const baseURL = 'http://api.rest7.com/v1/text_hash.php';

const URL = (text: string) => `${baseURL}?algo=md5&text=${text}`;

type Response = {
    algo?: string,
    hash?: string,
    length?: number,
    success: number
};
const fetchMD5 = async (text: string): Promise<Response> => {
    try {
        const response = await fetch(URL(text));
        const data = await response.json();
        if (! data.success) {
            throw new Error(data.success);
        }

        return data;
    } catch (e) {
        console.log(e.message);
        window.alert('There was an error trying to convert your text. Please try again later'); // eslint-disable-line no-alert
        return { success: 0 };
    }
};

export default fetchMD5;