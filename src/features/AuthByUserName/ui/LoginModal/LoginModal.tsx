import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppSpinner } from 'shared/ui/AppSpiner/AppSpinner';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginFormAsync } from '../LoginForm/LoginFormAsync';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
    <Modal
        lazy
        className={classNames('', {}, [className])}
        onClose={onClose}
        isOpen={isOpen}
    >
        <Suspense fallback={<AppSpinner />}>
            <LoginFormAsync />
        </Suspense>
    </Modal>
);
