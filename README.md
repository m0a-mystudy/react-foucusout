# Bad

```ts
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
```


# not bad


```ts
const MyTextArea = (pp: Props) => (
        <textarea
            cols={400}
            rows={12}
            value={pp.translation}
            onChange={onChangeTextArea(pp)}
        />
    );
  
const SomeTextArea = (props: Props) => {

    
    return (
        <div>
            <MyTextArea {...props} />
        </div>
    );
};

export default SomeTextArea;
```


