import React from "react";
import type { HTMLAttributes, PropsWithChildren, ReactElement } from "react";

import type { ButtonGroupVariantsProps, ButtonGroupItemVariantsProps } from "./ButtonGroup.variants";
import { buttonGroupVariants, buttonGroupItemVariants } from "./ButtonGroup.variants";


interface ButtonGroupProps
    extends HTMLAttributes<HTMLDivElement>,
    ButtonGroupVariantsProps {
}

interface ButtonGroupItemProps
    extends HTMLAttributes<HTMLButtonElement>,
    ButtonGroupItemVariantsProps { }


const ButtonGroup = ({
    children,
    variant = "primary",
    size = "md",
    radius = "md",
    className = "",
    ...props
}: PropsWithChildren<ButtonGroupProps>) => {
    // Filter children to only include React elements and add type assertion
    const items = React.Children.toArray(children).filter(
        (child): child is ReactElement<ButtonGroupItemProps> => React.isValidElement(child)
    );

    return (
        <div
            className={buttonGroupVariants({ variant, size, radius, className })}
            role="group"
            {...props}
        >
            {items.map((child, index) => {
                const position = items.length === 1
                    ? "single"
                    : index === 0
                        ? "first"
                        : index === items.length - 1
                            ? "last"
                            : "middle";

                return React.cloneElement(child, {
                    key: child.key || index,
                    className: buttonGroupItemVariants({
                        variant,
                        size,
                        active: child.props.active,
                        position,
                        className: child.props.className
                    }),
                    ...child.props
                });
            })}
        </div>
    );
};

const ButtonGroupItem = ({ children, active = false, onClick, ...props }: PropsWithChildren<ButtonGroupItemProps>) => {
    return (
        <button onClick={onClick} {...props}>
            {children}
        </button>
    );
};

export { ButtonGroup, ButtonGroupItem };
