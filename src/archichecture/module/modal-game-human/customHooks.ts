import { useEffect, useState, useContext } from "react";
import { GameContext } from "#reducers/tic-tac-toe/context";



type CustomHook_T = ( wrapRef: React.RefObject<HTMLDivElement>) => void;

export const useCustomHook: CustomHook_T = ( wrapRef ) => {
  const [firstRender, setFirstRender] = useState<boolean>(false);
  const { state } = useContext(GameContext);

  useEffect(() => {
    if (state.modalWindow) {
      changeStyle("flex", wrapRef);
    } else {
      if (firstRender) {
        setTimeout(() => {
          changeStyle("none", wrapRef);
        }, 800);
      } else {
        changeStyle("none", wrapRef);
        setFirstRender(true);
      }
    }
  }, [state.modalWindow]);

  function changeStyle(str: string, ref: React.RefObject<HTMLDivElement>) {
    if (ref.current) {
      ref.current.style.display = str;
    }
  }
};