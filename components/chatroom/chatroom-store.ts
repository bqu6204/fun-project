import { createContext } from "react";
import { TMessageList } from "./type";
import { TMessage } from "./type";

export enum EMessageAction {
  SENDTEXT = "SENDTEXT",
}

export interface IMessageAction {
  type: EMessageAction;
  payload: TMessage;
}

export const ChatContext = createContext<{
  messageList: null | TMessageList;
  currentUserId: null | string;
  setMessageList: any;
  currentUserAvatarSrc: null | string;
}>({
  messageList: null,
  currentUserId: null,
  currentUserAvatarSrc: null,
  setMessageList: () => {},
});

export function messageListReducer(
  state: TMessageList,
  action: IMessageAction
) {
  switch (action.type) {
    case EMessageAction.SENDTEXT:
      return [...state, action.payload];
    default:
      throw new Error();
  }
}
