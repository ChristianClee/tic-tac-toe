type JoinGame_T = (
  dateToServer: string,
  func: (str: string) => void
) => () => void;

export const joinGame: JoinGame_T = (dateToServer, func) => {
  return () => {
    func(dateToServer);
  };
};
