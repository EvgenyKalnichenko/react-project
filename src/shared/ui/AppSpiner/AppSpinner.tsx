import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppSpinner.module.scss';

interface AppSpinnerProps {
    className?: string
    sizeLoader?: number
}

const AppSpinner = ({ className, sizeLoader }: AppSpinnerProps) => {
    const size = sizeLoader ? `${sizeLoader}em` : '2em';
    return (
        <svg
            className={classNames(cls.svg, {}, [className])}
            viewBox="25 25 50 50"
            width={size}
        >
            <circle className={cls.circle} r="20" cy="50" cx="50" />
        </svg>
    );
};

export default AppSpinner;
