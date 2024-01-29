type JoinGame_T = (
  dateToServer: { _id: string; playerTwoName: string },
  func: (obj: { _id: string; playerTwoName: string }) => void
) => () => void;

export const joinGame: JoinGame_T = (dateToServer, func) => {
  return () => {
    func(dateToServer);
  };
};
