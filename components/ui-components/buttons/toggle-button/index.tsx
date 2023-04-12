

import classes from "./toggle-button.module.scss";

type Props = {
    isActive: boolean;
    isDisabled?: boolean;
    isRequired?: boolean;
    clickEvent: Function;
    label: string;
    labelClassName?: string;
    styleConfig?: {
        defaultBackgroundColor: string;
        activeBackgroundColor: string;
        buttonColor: string;
        radius: string;
    };
    sizeConfig?: {
        height: string;
        width: string;
    };
};

export default function ToggleButton({
     isActive, isDisabled, isRequired, clickEvent, label = "",
     labelClassName, sizeConfig = { height: "20px", width: "43px" },
     styleConfig = {
         defaultBackgroundColor: "rgba(120, 120, 128, 0.36)",
         activeBackgroundColor: "#32D74B",
         buttonColor: "#fff",
         radius: "100px",
     }
}: Props) {

    return (
        <div
            onClick={() => isDisabled ? null : clickEvent()}
            className={`${classes.toggle__button__component__container} ${isDisabled ? classes.disabled__component__element : ''}`}
        >
            {label !== ''
                ? <span className={`${classes.label} ${labelClassName} block__regular-text`}>
                    {label}
                    {isRequired ? <span style={{color: "#f1595e"}}>*</span> : null}
                </span>
                : null
            }
            <div
                className={`${classes.toggle__button__container}`}
                style={{
                    height: sizeConfig.height,
                    width: sizeConfig.width,
                    borderRadius: styleConfig.radius,
                    backgroundColor: isActive ? styleConfig.activeBackgroundColor : styleConfig.defaultBackgroundColor
                }}
            >
                <div
                    className={`${classes.toggle__tumbler}`}
                    style={{
                        height: `calc(${sizeConfig.height} - 3px)`,
                        width: `calc(${sizeConfig.height} - 3px)`,
                        borderRadius: styleConfig.radius,
                        backgroundColor: styleConfig.buttonColor,
                        left: isActive ? `calc(${sizeConfig.width} - ${sizeConfig.height})` : '1px'
                    }}
                />
            </div>

        </div>
    );
};
