import { useContext } from "react";
import AppStateContext from '../context/AppStateContext';

export default function setMainView() {
  const { viewImageList, setViewImageList } = useContext(AppStateContext);

  return { viewImageList, setViewImageList };
}
