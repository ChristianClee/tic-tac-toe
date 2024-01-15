import { getPathServer } from "#commonUtilits/getPathServer";
import { headersGet } from "#constants/fetching/headers/headers";

const serverPath = getPathServer();

interface responce_I {
  uniqKey: string | null;
  error?: string;
}




export function fetchCreateGame(addPath: string, dateToServer: string ) {
  return () => {
    fetch(serverPath + addPath, {
      method: "POST",
      headers: headersGet,
      body: dateToServer,
    })
      .then((res) => res.json())
      .then((res: responce_I) => {
        const uniqKey = sessionStorage.getItem("myGameKey");
        if (!uniqKey && !res.error && res.uniqKey) {
          sessionStorage.setItem("myGameKey", res.uniqKey);
        }
        if (uniqKey) {
          console.warn(`${uniqKey} is existing`);
        }
        if (res.error) {
          console.warn(res.error);
        }
        if (!res.uniqKey) {
          console.warn(`uniqKey is ${res.uniqKey}`);
        }
      })
      .catch((e) => {
        console.log(e.message);
      });
  };
}
