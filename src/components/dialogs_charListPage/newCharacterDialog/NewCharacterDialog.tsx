import './newCharacterDialog.scss';
import { Check, WarningCircle, Xmark } from 'iconoir-react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

interface NewCharacterDialogProps {
    onClose: () => void;
}

interface FormData {
    name: string;
}

const NewCharacterDialog: React.FC<NewCharacterDialogProps> = ({ onClose }) => {
    const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm<FormData>({
        delayError: 1000,
        criteriaMode: 'all',
        mode: 'onChange',
        defaultValues: {
            name: ''
        }
    });

    const onSubmit = (data: FormData) => {
        console.log('Nuovo personaggio:', data.name);
        reset();
        onClose();
    };

    const handleClose = () => {
        reset();
        onClose();
    }

    return (
        <>
          <button type="button" className='as-dialog-close-btn only-light-mode' onClick={handleClose}>
                <Xmark />
            </button>
            <div className='as-dialog-header'>
                <h2>Nuovo personaggio</h2>
            </div>
            <div className='as-dialog-content'>
                <p>Inserisci il nome del Personaggio (massimo 20 caratteri). Se non ti bastano i caratteri potrai inserire, in seguito, un nome esteso per il tuo personaggio.</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='as-form-field'>
                        <input
                            id="name"
                            type="text"
                            placeholder='Nome personaggio*'
                            style={errors.name ? { borderColor: 'var(--fg-color-error)' } : {}}
                            {...register('name', { required: 'Campo obbligatorio', minLength: { value: 3, message: 'Minimo 3 caratteri' }, maxLength: { value: 20, message: 'Massimo 20 caratteri' } })}
                        // onBlur={() => {}}
                        />
                        <ErrorMessage errors={errors} name='name' render={({ messages }) =>
                            messages &&
                            Object.entries(messages).map(([type, message]) => (
                                <p key={type} className="as-error-message"><WarningCircle />{message}</p>
                            ))
                        } />
                    </div>
                    <div className='as-dialog-footer'>
                        {/* <button type="button" className='as-mini-icon-btn only-light-mode' onClick={handleClose}>
                            <Xmark />
                        </button> */}
                        <button type="submit" className='as-mini-icon-btn only-light-mode' disabled={!isValid}>
                            <Check />
                        </button>
                    </div>
                </form>
          
            </div>
        </>
    );
}

export default NewCharacterDialog;