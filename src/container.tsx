import * as React from 'react';

// ui
import Cell from './target';

interface Props {
  onSave: () => void;
}

interface State {
  text: string;
  dontTranslate: boolean;
}

export default class EditorCell extends React.Component<Props, State> {
  render() {
    const { onSave } = this.props;
    const { text } = this.state;

    return (
    <Cell
      translation={text}
      onSave={onSave}
      onChangeTextArea={(t) => this.onChangeTextArea(t)}
    />);
  }
  constructor(props: Props) {
    super(props);
    this.state = {
      text: '',
      dontTranslate: false,
    };
  }
  onChangeTextArea(text: string) {
    this.setState({
      text,
    });
  }
}
