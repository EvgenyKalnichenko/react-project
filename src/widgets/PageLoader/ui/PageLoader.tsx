import { classNames } from 'shared/lib/classNames/classNames';
import AppSpinner from 'shared/ui/AppSpiner/AppSpinner';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string
}

const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={classNames(cls.PageLoader, {}, [className])}>
        <AppSpinner sizeLoader={4} />
    </div>
);

export default PageLoader;
