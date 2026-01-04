import "./LocateMeBtn.scss";
import { type MouseEvent, useEffect, useState } from "react";
import { getAddress, getCoords } from "~/utils/methods";
import type { AppDispatch } from "~/store";
import { useDispatch } from "react-redux";
import { setResultError, updatePlace } from "~/store/slices/general";
import { getMainData } from "~/store/thunkMethods";

export default function LocateMeBtn() {
  const [pending, setPending] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const locateMe = async (e?: MouseEvent<HTMLButtonElement>) => {
    e?.preventDefault();
    setPending(true);
    dispatch(setResultError(null));

    try {
      const { lat, lng } = await getCoords();
      const location = await getAddress(lat, lng);
      dispatch(updatePlace({ lat, lng, location }));
      dispatch(getMainData({ lat, lng }));
    } catch (error) {
      dispatch(setResultError(error as string));
    } finally {
      setPending(false);
    }
  };

  useEffect(() => {
    locateMe();
  }, []);

  return (
    <button className="locate-me" disabled={pending} onClick={locateMe}>
      {pending ? "Locating... " : "Locate Me"}
    </button>
  );
}
