import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { text, select, boolean } from '@storybook/addon-knobs';

import { Arrow, isOptionShape } from '@alfalab/core-components-select/shared';
import { InputAutocompleteDesktop as InputAutocomplete } from '@alfalab/core-components-input-autocomplete/desktop';
import {
    InputAutocompleteMobile,
    InputAutocompleteModalMobile,
} from '@alfalab/core-components-input-autocomplete/mobile';

const matchOption = (option, inputValue) =>
    option.key.toLowerCase().includes((inputValue || '').toLowerCase());

const meta: Meta<typeof InputAutocomplete> = {
    title: 'Components/InputAutocomplete',
    component: InputAutocomplete,
    id: 'InputAutocomplete',
};

type Story = StoryObj<typeof InputAutocomplete>;

export const input_autocomplete: Story = {
    name: 'InputAutocomplete',
    render: () => {
        const options = [
            { key: 'Neptunium' },
            { key: 'Plutonium' },
            { key: 'Americium' },
            { key: 'Curium' },
            { key: 'Berkelium' },
            { key: 'Californium' },
            { key: 'Einsteinium' },
            { key: 'Fermium' },
            { key: 'Mendelevium' },
            { key: 'Nobelium' },
            { key: 'Lawrencium' },
            { key: 'Rutherfordium' },
            { key: 'Dubnium' },
            { key: 'Seaborgium' },
            { key: 'Bohrium' },
        ];

        const [value, setValue] = React.useState('');
        const handleInput = (event) => {
            setValue(event.target.value);
        };
        const handleChange = ({ selected }) => {
            setValue(selected ? selected.key : '');
        };
        const filteredOptions = options.filter((option) => matchOption(option, value));
        return (
            <InputAutocomplete
                options={filteredOptions}
                selected={boolean('prevent select', true) ? [] : undefined}
                block={boolean('block', false)}
                size={select('size', ['s', 'm', 'l', 'xl'], 's')}
                disabled={boolean('disabled', false)}
                error={text('error', '')}
                success={boolean('success', false)}
                hint={text('hint', '')}
                allowUnselect={boolean('allowUnselect', true)}
                closeOnSelect={boolean('closeOnSelect', false)}
                Arrow={boolean('Arrow', false) ? Arrow : undefined}
                circularNavigation={boolean('circularNavigation', false)}
                placeholder={text('placeholder', 'Введите элемент')}
                label={text('label', 'Элемент')}
                labelView={select('labelView', ['inner', 'outer'], 'inner')}
                onChange={handleChange}
                onInput={handleInput}
                value={value}
            />
        );
    },
};

export const input_autocomplete_mobile: Story = {
    name: 'InputAutocompleteMobile',
    render: () => {
        const options = [
            { key: '1', content: 'Neptunium' },
            { key: '2', content: 'Plutonium' },
            { key: '3', content: 'Americium' },
            { key: '4', content: 'Curium' },
            { key: '5', content: 'Berkelium' },
            { key: '6', content: 'Californium' },
            { key: '7', content: 'Einsteinium' },
            { key: '8', content: 'Fermium' },
            { key: '9', content: 'Hydrogenium' },
            { key: '10', content: 'Helium' },
            { key: '11', content: 'Lithium' },
            { key: '12', content: 'Beryllium' },
            { key: '13', content: 'Borum' },
            { key: '14', content: 'Carboneum' },
            { key: '15', content: 'Nitrogenium' },
            { key: '16', content: 'Oxygenium' },
        ];
        const matchOption = (option, inputValue) =>
            option.content.toLowerCase().includes((inputValue || '').toLowerCase());
        const [value, setValue] = React.useState('');
        const [filter, setFilter] = React.useState('');
        const handleFilter = (event) => {
            setFilter(event.target.value);
        };
        const handleChange = (payload) => {
            const newValue = payload
                ? isOptionShape(payload.selected)
                    ? payload.selected.content
                    : payload
                : '';
            setValue(newValue);
            setFilter(newValue);
        };
        const filteredOptions = options.filter((option) => matchOption(option, filter));
        return (
            <InputAutocompleteMobile
                dataTestId={'asfa fs asf afa'}
                block={boolean('block', false)}
                size={select('size', ['s', 'm', 'l', 'xl'], 's')}
                disabled={boolean('disabled', false)}
                error={text('error', '')}
                hint={text('hint', '')}
                closeOnSelect={boolean('closeOnSelect', true)}
                value={value}
                filter={filter}
                options={filteredOptions}
                placeholder={text('placeholder', 'Выберите элемент')}
                label={text('label', 'Элемент')}
                labelView={select('labelView', ['inner', 'outer'], 'inner')}
                onChange={handleChange}
                onFilter={handleFilter}
                onClearFilter={() => setFilter('')}
                continueButtonProps={{
                    dataTestId: 'continue',
                }}
                cancelButtonProps={{
                    dataTestId: 'cancel',
                }}
                bottomSheetProps={{
                    transitionProps: {
                        onEnter: () => setFilter(value),
                    },
                }}
            />
        );
    },
};

export const input_autocomplete_modal_mobile: Story = {
    name: 'InputAutocompleteModalMobile',
    render: () => {
        const options = [
            { key: '1', content: 'Neptunium' },
            { key: '2', content: 'Plutonium' },
            { key: '3', content: 'Americium' },
            { key: '4', content: 'Curium' },
            { key: '5', content: 'Berkelium' },
            { key: '6', content: 'Californium' },
            { key: '7', content: 'Einsteinium' },
            { key: '8', content: 'Fermium' },
            { key: '9', content: 'Hydrogenium' },
            { key: '10', content: 'Helium' },
            { key: '11', content: 'Lithium' },
            { key: '12', content: 'Beryllium' },
            { key: '13', content: 'Borum' },
            { key: '14', content: 'Carboneum' },
            { key: '15', content: 'Nitrogenium' },
            { key: '16', content: 'Oxygenium' },
        ];
        const matchOption = (option, inputValue) =>
            option.content.toLowerCase().includes((inputValue || '').toLowerCase());
        const [value, setValue] = React.useState('');
        const [filter, setFilter] = React.useState('');
        const handleFilter = (event) => {
            setFilter(event.target.value);
        };
        const handleChange = (payload) => {
            const newValue = payload
                ? isOptionShape(payload.selected)
                    ? payload.selected.content
                    : payload
                : '';
            setValue(newValue);
            setFilter(newValue);
        };
        const filteredOptions = options.filter((option) => matchOption(option, filter));
        return (
            <InputAutocompleteModalMobile
                dataTestId='iamm'
                block={boolean('block', false)}
                size={select('size', ['s', 'm', 'l', 'xl'], 's')}
                disabled={boolean('disabled', false)}
                error={text('error', '')}
                hint={text('hint', '')}
                closeOnSelect={boolean('closeOnSelect', true)}
                value={value}
                filter={filter}
                options={filteredOptions}
                placeholder={text('placeholder', 'Выберите элемент')}
                label={text('label', 'Элемент')}
                labelView={select('labelView', ['inner', 'outer'], 'inner')}
                onChange={handleChange}
                onFilter={handleFilter}
                onClearFilter={() => setFilter('')}
                continueButtonProps={{
                    dataTestId: 'continue',
                }}
                cancelButtonProps={{
                    dataTestId: 'cancel',
                }}
            />
        );
    },
};

export default meta;