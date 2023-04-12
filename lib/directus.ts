import axios from "axios";

export async function getDirectusItemsByAxios<T>(name: string) {
    try {
        const { data: { data } } = await axios.get(`${process.env.NEXT_PUBLIC_DIRECTUS}/items/${name}`, {
            headers: {
                authorization: `Bearer ${process.env.NEXT_PUBLIC_DIRECTUS_STATIC_TOKEN}`
            }
        });
        return data;
    } catch (error) {
        console.error(error);
    }
}