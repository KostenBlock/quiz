import { getDirectusItemsByAxios } from "~/lib/directus";
import { useEffect } from "react";
import { useAppDispatch } from "~/store/hooks";
import { setState } from "~/store/reducers/crm.slice";

import HomePage from "~/components/page-components/home-page";

import { CrmI } from "~/helpers/interfaces/crm.interface";

export default function Home(props: CrmI) {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setState({ ...props }));
    }, []);

    return <HomePage {...props} />;
};

export async function getStaticProps() {
    try {
        const quizData = await getDirectusItemsByAxios('quiz');
        return {
            props: {
                ...quizData
            }
        }
    } catch (error) {
        return {
            props: { seo: null, mainSection: null, status: 'error' }
        }
    }
}
