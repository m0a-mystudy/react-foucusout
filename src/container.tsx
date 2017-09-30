import * as React from 'react';

// ui
import Cell from './target';

interface Props {
  onSave: () => void;
}

interface Pair {
    convert: string;
    dontConv: boolean;
}

interface State {
  pair: Pair | undefined;
  translationText: string;
  dontTranslate: boolean;
}

export default class EditorCell extends React.Component<Props, State> {
  render() {
    const { onSave } = this.props;
    const { pair, translationText } = this.state;

    if (pair === undefined) {
      return null;
    }
    return (
    <Cell
      translation={translationText}
      onSave={onSave}
      onChangeTranslation={(text) => this.onChangeTranslation(text)}
      isEditing={false}
    />);
  }
//   sm: StorageManager = new StorageManager();
  async loadData() {
    // const { pairKey, contentID } = this.props;
    // const pair = await this.sm.getPair(contentID, pairKey);
    const pair: Pair = {
        convert: 'translation',
        dontConv: false,
    };

    if (pair === undefined) {
      return;
    }
    this.setState({
      pair,
      translationText: (pair.convert),
      dontTranslate: pair.dontConv,
    });
  }
  constructor(props: Props) {
    super(props);
    this.state = {
      pair: {dontConv: false, convert: 'init'},
      translationText: '',
      dontTranslate: false,
    };
    console.log('hello ');
    // this.loadData();
  }
  isEditing(): boolean {
    const { pair, translationText, dontTranslate } = this.state;
    // tslint:disable-next-line:curly
    if (pair === undefined) return false;

    return !(
      pair.convert &&
      // 編集中であること
      translationText === (pair.convert) &&
      // 編集対象外/対象にするとこ
      dontTranslate === pair.dontConv
    );
  }
  onChangeTranslation(translationText: string) {
    this.setState({
      translationText,
    });
  }
  onChangeEnable(enable: boolean) {
    this.setState({
      dontTranslate: enable,
    });
  }
}
