import * as React from 'react';

// ui
import Cell from './target';

interface Props {
}

interface State {
  text: string;
}

export default class EditorCell extends React.Component<Props, State> {
  render() {
    const { text } = this.state;

    return (
    <Cell
      translation={text}
      onChangeTextArea={(t) => this.onChangeTextArea(t)}
    />);
  }
  constructor(props: Props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  onChangeTextArea(text: string) {
    this.setState({
      text,
    });
  }
}
