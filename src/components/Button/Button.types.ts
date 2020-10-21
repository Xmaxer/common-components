import { ButtonProps } from '@material-ui/core/Button/Button';

export const PRIMARY_BUTTON = 'primary';
export const SECONDARY_BUTTON = 'secondary';
export type ButtonTypes = typeof PRIMARY_BUTTON | typeof SECONDARY_BUTTON;

/**
 * Button props. This extends props of https://material-ui.com/api/button/
 */
export interface IButtonProps extends ButtonProps {
    /**
     * The button style type
     */
    buttonType?: ButtonTypes;
}
