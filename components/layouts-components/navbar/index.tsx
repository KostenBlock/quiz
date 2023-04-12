import { useAppSelector } from "~/store/hooks";
import { selectCRMSlice } from "~/store/reducers/crm.slice";

import Link from "next/link";

import classes from "./header.module.scss";
import Phone from "~/public/assets/phone.svg";

export default function Navbar() {
    const { logo, phone, displayPhone } = useAppSelector(selectCRMSlice);

    return (
        <div className={`${classes.wrapper}`}>
            <div className={`${classes.content} row`}>
                <div className={`${classes.picture__container}`} dangerouslySetInnerHTML={{ __html: logo }} />
                <p className={`block__regular-text`}>Официальный сайт застройщика</p>
                <Link
                    href={`tel:${phone}`}
                    className={`${classes.phone} column`}
                >
                    <Phone />
                   <p className={`block__regular-text`}> {displayPhone}</p>
                </Link>
            </div>
        </div>
    );
};