
import classes from "./initial-container.module.scss";
import Check from "~/public/assets/check.svg";
import PlainButton from "~/components/ui-components/buttons/plain-button";

interface Props {
    header: string;
    button: string;
}

export default function InitialContainer({ header, button }: Props) {

    return (
        <div className={`${classes.initial__container} row`}>
            <h1 className={`block__header-1`} dangerouslySetInnerHTML={{ __html: header }} />
            <PlainButton
                clickEvent={() => {}}
                className={`${classes.button__start}`}
                isAnimated={true}
            >
                {button}
            </PlainButton>
        </div>
    );
};