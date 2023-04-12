
import classes from "./home-page.module.scss";
import PlainImage from "~/components/ui-components/images/plain-image";

import { ImageI } from "~/helpers/interfaces/crm.interface";

interface Props extends ImageI {
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

            </div>
        </div>
    );
};