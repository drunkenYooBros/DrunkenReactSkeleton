import { InputTextState } from '.';
import { selector } from "recoil";
import * as States from "constant/state";

export default selector<number>({
    key: States.TEXT_COUNT,
    get: ({get}) => {
      const text = get(InputTextState);
      return text.length;
    },
  });