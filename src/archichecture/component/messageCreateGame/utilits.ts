import { getPathServer } from "#commonUtilits/getPathServer";
import { headersGet } from "#constants/fetching/headers/headers";
import { GameActions_T, ActionType_E } from "#reducers/tic-tac-toe/actions";
import { Session_st_E } from "#constants/tic-tac-toe-base/constNames";


const serverPath = getPathServer();

interface responce_I {
  gameKey?: string | undefined;
  playerKey?: string | undefined;
  error?: string | undefined;
}


export function fetchCreateGame(
  addPath: string,
  dateToServer: string,
  dispatch: React.Dispatch<GameActions_T>
) {
  return () => {
    fetch(serverPath + addPath, {
      method: "POST",
      headers: headersGet,
      body: dateToServer,
    })
      .then((res) => res.json())
      .then((res: responce_I) => {
        const gameKey = sessionStorage.getItem(Session_st_E.GAMEKEY);
        const playerKey = sessionStorage.getItem(Session_st_E.PLAYERKEY);

        if (
          !gameKey &&
          !playerKey &&
          !res.error &&
          res.gameKey &&
          res.playerKey
        ) {
          sessionStorage.setItem(Session_st_E.GAMEKEY, res.gameKey);
          sessionStorage.setItem(Session_st_E.PLAYERKEY, res.playerKey);
          dispatch({
            type: ActionType_E.TuggleSessionStorage,
            payload: true,
          });
        }
        if (res.error) {
          console.warn(res.error);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
}
