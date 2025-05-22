export type DeleteConfirmationModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    confirmText: string;
    title: string;
    description: string;
};