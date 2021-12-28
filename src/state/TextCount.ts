import { selector } from "recoil";
import { InputTextState } from ".";
import { States } from "constant/state";

export default selector<number>({
    key: States.TEXT_COUNT,
    get: ({get}) => {
      const text = get(InputTextState);
      return text.length;
    },
  });