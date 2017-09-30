import * as React from 'react';

export interface Props {
    translation: string;
    errorMessage?: string;

    onSave?: () => void;
    onChangeTranslation?: (text: string) => void;
    isEditing?: boolean;

}

const onSave = (props: Props) => () => {
    if (!props.onSave) { return; }
    props.onSave();
};

const onChangeTranslation = (props: Props) => (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!props.onChangeTranslation) { return; }
    props.onChangeTranslation(ev.target.value);
};

const Buttons = (props: Props) => (
    <div className="field is-grouped">
        <p className="control">
            <button
                className="button is-primary is-small"
                onClick={onSave(props)}
                disabled={(!props.isEditing)}
            >
                Save
            </button>
        </p>
    </div>
);

const EditCell = (props: Props) => {
    let translationTextArea: HTMLTextAreaElement | null;
    // tslint:disable-next-line:no-shadowed-variable
    const TransTextArea = (props: Props) => (
        props.errorMessage ? (
            <div className="field">
                <textarea
                    ref={el => { translationTextArea = el;  }}
                    className="textarea is-small is-danger"
                    placeholder="翻訳"
                    value={props.translation}
                    onChange={onChangeTranslation(props)}
                />
                <p className="help is-danger" >{props.errorMessage}</p>
            </div>) : (

                <div className="field">
                    <textarea
                        ref={el => { translationTextArea = el;  }}
                        className="textarea is-small"
                        value={props.translation}
                        onChange={onChangeTranslation(props)}
                    />
                </div>
            )

    );

    return (
        <article className="media">
            <div className="media-content">
                <TransTextArea {...props} />
                <Buttons {...props} />
            </div>
        </article>
    );
};

export default EditCell;
