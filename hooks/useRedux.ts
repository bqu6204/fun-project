import type {
  YoubikeDispatch,
  YoubikeState,
} from "@/redux/youbike/youbike-store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// Use throughout your app instead of plain `useDispatch` and `useSelector` for type check
export const useYoubikeSelector: TypedUseSelectorHook<YoubikeState> =
  useSelector;
export const useYoubikeDispatch = () => useDispatch<YoubikeDispatch>();
