import * as React from 'react';

export interface Props {
    translation: string;
    onChangeTextArea?: (text: string) => void;
}

const onChangeTextArea = (props: Props) => (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!props.onChangeTextArea) { return; }
    props.onChangeTextArea(ev.target.value);
};

const SomeTextArea = (props: Props) => {
    const MyTextArea = (pp: Props) => (
        <textarea
            cols={400}
            rows={12}
            value={pp.translation}
            onChange={onChangeTextArea(pp)}
        />
    );
    
    return (
        <div>
            <MyTextArea {...props} />
        </div>
    );
};

export default SomeTextArea;
