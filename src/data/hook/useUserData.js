import { useContext } from "react";
import AppStateContext from '../context/AppStateContext';

export default function useUser() {
  const { user, setUser } = useContext(AppStateContext);

  return { user, setUser };
}
