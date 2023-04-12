
import classes from "./home-page.module.scss";
import PlainImage from "~/components/ui-components/images/plain-image";

import {CrmI, ImageI} from "~/helpers/interfaces/crm.interface";
import InitialContainer from "~/components/page-components/home-page/initial-container";

interface Props extends CrmI {
}

export default function HomePage(props: Props) {
    return (
        <div className={`${classes.wrapper}`}>
            <PlainImage
                imageKey={props.imageKey}
                format={props.format}
                className={`${classes.picture__container} absolute`}
                classNameImage={'cover-image'}
            />
            <div className={`${classes.content}`}>
                <InitialContainer header={props.header} button={props.button} />
            </div>
        </div>
    );
};