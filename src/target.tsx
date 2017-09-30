import * as React from 'react';

export interface Props {
    translation: string;
    onSave?: () => void;
    onChangeTextArea?: (text: string) => void;
}

const onSave = (props: { onSave?: () => void }) => () => {
    if (!props.onSave) { return; }
    props.onSave();
};

const onChangeTextArea = (props: Props) => (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!props.onChangeTextArea) { return; }
    props.onChangeTextArea(ev.target.value);
};

const Buttons = (props: { onSave?: () => void }) => (
    <div>
        <button  onClick={onSave(props)} >
            Save
        </button>
    </div>
);

const EditCell = (props: Props) => {
    // tslint:disable-next-line:no-shadowed-variable
    const TransTextArea = (props: Props) => (
        <textarea
            cols={400}
            rows={12}
            value={props.translation}
            onChange={onChangeTextArea(props)}
        />
    );

    return (
        <div>
            <TransTextArea {...props} />
            <Buttons {...props} />
        </div>
    );
};

export default EditCell;
