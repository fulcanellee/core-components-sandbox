import React, { forwardRef, useContext } from 'react';
import cn from 'classnames';

import { BaseModal, BaseModalProps } from '@alfalab/core-components-base-modal';

import { ContentMobile } from '../components/content/Component.mobile';
import { FooterMobile } from '../components/footer/Component.mobile';
import { Header } from '../components/header/Component';
import { ResponsiveContext } from '../ResponsiveContext';

import styles from './mobile.module.css';
import transitions from './transitions.mobile.module.css';

export type SidePanelMobileProps = BaseModalProps & {
    /**
     * Управление наличием закрывающего крестика
     * @default false
     */
    hasCloser?: boolean;
};

const contextValue = { size: 's', view: 'mobile' } as const;

const SidePanelMobileComponent = forwardRef<HTMLDivElement, SidePanelMobileProps>(
    ({ children, className, transitionProps, ...restProps }, ref) => {
        const responsiveContext = useContext(ResponsiveContext);

        const renderContent = () => (
            <BaseModal
                {...restProps}
                ref={ref}
                transitionProps={{
                    classNames: transitions,
                    ...transitionProps,
                }}
                className={cn(className, styles.component)}
                scrollHandler='content'
            >
                <div className={styles.mobileContent}>{children}</div>
            </BaseModal>
        );

        const renderWithContext = () => (
            <ResponsiveContext.Provider value={contextValue}>
                {renderContent()}
            </ResponsiveContext.Provider>
        );

        return responsiveContext ? renderContent() : renderWithContext();
    },
);

export const SidePanelMobile = Object.assign(SidePanelMobileComponent, {
    Content: ContentMobile,
    Header,
    Footer: FooterMobile,
});