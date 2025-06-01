import React from 'react'
import { type RootState } from '@/app/configureStore';
import type { ColorSchemePreference } from "@/types/settings";
import { LIGHT_COLOR_SCHEME_PREFERENCE, DARK_COLOR_SCHEME_PREFERENCE, SYSTEM_COLOR_SCHEME_PREFERENCE } from "@/types/settings";
import { changeColorSchemePreference, selectColorSchemePreference } from '@/slices/settings';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonGroup, ButtonGroupItem } from '../components/ButtonGroup';

type ModeOption =
    {
        label: string;
        value: ColorSchemePreference;
    }

const MODES: Readonly<ModeOption[]> = [
    {
        label: 'Auto',
        value: SYSTEM_COLOR_SCHEME_PREFERENCE,
    },
    {
        label: 'Light',
        value: LIGHT_COLOR_SCHEME_PREFERENCE,
    },
    {
        label: 'Dark',
        value: DARK_COLOR_SCHEME_PREFERENCE,
    },
]


export const ModeSelect: React.FC = () => {

    const dispatch = useDispatch();
    const currentColor = useSelector<RootState, ColorSchemePreference>(
        (state) => selectColorSchemePreference(state)
    );

    const onSelectColorScheme = (preference: ColorSchemePreference): void => {
        dispatch(changeColorSchemePreference(preference));
        return;
    }
    return (
        <ButtonGroup variant="primary" size="md">
            {MODES.map(({ label, value }) => (
                <ButtonGroupItem
                    key={value}
                    active={value === currentColor}
                    onClick={() => onSelectColorScheme(value)}
                >
                    {label}
                </ButtonGroupItem>
            ))}
        </ButtonGroup>
    )
}
