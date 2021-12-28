import { useRecoilState, useRecoilValue } from "recoil"
import { InputTextState, TextCountState } from "state"

function CharacterCounter () {
    return (
        <div>
            <TextInput />
            <CharacterCount />
        </div>
    )
}

function TextInput () {
    const [inputText, setText]: [any, Function] = useRecoilState(InputTextState)

    const onChange = (event: any) => {
        setText(event.target.value)
    }

    return (
        <div>
            <input type="text" value={inputText} onChange={onChange} />
            <br />
            Input Text: {inputText}
        </div>
    )
}

function CharacterCount () {
    const count = useRecoilValue(TextCountState)
    return <>Text Length: {count}</>
}

export default CharacterCounter


  