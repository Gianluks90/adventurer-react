import './newCharacterDialog.scss';
import React, { useEffect, useRef } from 'react';
import { Check, WarningCircle, Xmark } from 'iconoir-react';
import { useForm } from 'react-hook-form';

interface NewCharacterDialogProps {
    isOpen: boolean;
    onClose: () => void;
}

interface FormData {
    name: string;
}

const NewCharacterDialog: React.FC<NewCharacterDialogProps> = ({ isOpen, onClose }) => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

    useEffect(() => {
        const dialog = dialogRef.current;
        if (dialog) {
            if (isOpen) {
                dialog.showModal();
                reset();
            } else {
                dialog.close();
            }
        }
    }, [isOpen, reset]);

    const onSubmit = (data: FormData) => {
        console.log('Nuovo personaggio:', data.name);
        reset();
        onClose();
    };

    return (
        <dialog ref={dialogRef} className="as-dialog">
            <div className='as-dialog-header'>
                <h2>Nuovo personaggio</h2>
            </div>
            <div className='as-dialog-content'>
                <p>Inserisci il nome del Personaggio (massimo 20 caratteri), confermando la scelta la pagina verrà ricaricata. Se non ti bastano i caratteri sappi che più avanti potrai inserire un nome esteso per il tuo personaggio.</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='as-form-field'>
                        {/* <label htmlFor="name">Nome</label> */}
                        <input
                            id="name"
                            type="text"
                            placeholder='Nome personaggio'
                            minLength={3}
                            maxLength={20}
                            {...register('name', { required: 'Campo obbligatorio' })}
                        />
                        {errors.name && <p className="as-error-message"><WarningCircle /> {errors.name.message}</p>}
                    </div>
                    <div className='as-dialog-footer'>
                        <button type="button" className='as-mini-icon-btn' onClick={onClose}>
                            <Xmark />
                        </button>
                        <button type="submit" className='as-mini-icon-btn'>
                            <Check />
                        </button>
                    </div>
                </form>
            </div>
        </dialog>
    );
}

export default NewCharacterDialog;