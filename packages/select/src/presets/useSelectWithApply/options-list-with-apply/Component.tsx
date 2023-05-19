import React, { FC, forwardRef, RefAttributes, useCallback, useEffect } from 'react';

import { OptionsList as DefaultOptionsList } from '../../../components/options-list';
import { DEFAULT_VISIBLE_OPTIONS } from '../../../consts';
import { OptionShape, OptionsListProps } from '../../../typings';
import { SELECT_ALL_KEY } from '../hook';

import { Footer as DefaultFooter, FooterProps } from './footer/Component';

type OptionsListWithApplyProps = OptionsListProps & {
    showClear?: boolean;
    onClose?: () => void;
    selectedDraft?: OptionShape[];
    OptionsList?: React.FC<OptionsListProps & RefAttributes<HTMLDivElement>>;
    Footer?: FC<FooterProps>;
};

export const OptionsListWithApply = forwardRef<HTMLDivElement, OptionsListWithApplyProps>(
    (
        {
            toggleMenu,
            getOptionProps: defaultGetOptionProps,
            showClear = true,
            selectedDraft = [],
            flatOptions = [],
            OptionsList = DefaultOptionsList,
            onApply = () => null,
            onClear = () => null,
            onClose = () => null,
            visibleOptions = DEFAULT_VISIBLE_OPTIONS,
            Footer = DefaultFooter,
            ...restProps
        }: OptionsListWithApplyProps,
        ref,
    ) => {
        const getOptionProps = useCallback(
            (option: OptionShape, index: number) => {
                const optionProps = defaultGetOptionProps(option, index);

                const selected =
                    option.key === SELECT_ALL_KEY
                        ? selectedDraft.length === flatOptions.length - 1
                        : selectedDraft.includes(option);

                return {
                    ...optionProps,
                    selected,
                };
            },
            [defaultGetOptionProps, flatOptions.length, selectedDraft],
        );

        const handleApply = useCallback(() => {
            onApply();

            toggleMenu();
        }, [onApply, toggleMenu]);

        const handleClear = useCallback(() => {
            onClear();

            toggleMenu();
        }, [onClear, toggleMenu]);

        useEffect(() => {
            const activeElement = document.activeElement as HTMLElement;

            return () => {
                onClose();
                if (activeElement) {
                    activeElement.focus();
                }
            };
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        return (
            <OptionsList
                {...restProps}
                ref={ref}
                visibleOptions={visibleOptions}
                toggleMenu={toggleMenu}
                flatOptions={flatOptions}
                getOptionProps={getOptionProps}
                onApply={handleApply}
                onClear={handleClear}
                footer={
                    <Footer
                        handleApply={handleApply}
                        handleClear={handleClear}
                        showClear={showClear}
                        selectedDraft={selectedDraft}
                    />
                }
            />
        );
    },
);