import * as React from 'react';

export interface Props {
    translation: string;
    errorMessage?: string;

    onSave?: () => void;
    onChangeTextArea?: (text: string) => void;
}

const onSave = (props: {onSave?: () => void}) => () => {
    if (!props.onSave) { return; }
    props.onSave();
};

const onChangeTextArea = (props: Props) => (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!props.onChangeTextArea) { return; }
    props.onChangeTextArea(ev.target.value);
};

const Buttons = (props: {onSave?: () => void}) => (
    <div className="field is-grouped">
        <p className="control">
            <button
                className="button is-primary is-small"
                onClick={onSave(props)}
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
                    onChange={onChangeTextArea(props)}
                />
                <p className="help is-danger" >{props.errorMessage}</p>
            </div>) : (

                <div className="field">
                    <textarea
                        ref={el => { translationTextArea = el;  }}
                        className="textarea is-small"
                        value={props.translation}
                        onChange={onChangeTextArea(props)}
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
