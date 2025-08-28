import classNames from "classnames";
import { twMerge } from "./twMergeUtils";

export function cn(...classes) {
  return twMerge(classNames(...classes));
}
