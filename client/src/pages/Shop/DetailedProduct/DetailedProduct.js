import { Suspense, lazy, useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getDetailedDevice } from "../../../redux/actions";
// import { detailedDeviceState } from '../../../redux/selectors';
import { getAbsolutePath } from "../../../helpers";
import { detailedDeviceState } from "../../../redux/selectors/index.js";
// import MainDetailedProduct from "../../../components/MainDetailedProduct/index.js";

const ReadyMainDetailedProduct = lazy(() =>
  import("../../../components/MainDetailedProduct/index.js")
);

function DetailedProduct() {
  const dispatch = useDispatch();
  const location = useLocation();
  const getData = useCallback(() => {
    dispatch(
      getDetailedDevice.getDetailedDeviceRequest(
        getAbsolutePath(location.pathname)
      )
    );
  }, [dispatch, location.pathname]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div>
      <Suspense
        fallback={
          <>
            <h1>Loading data...</h1>
          </>
        }
      >
        <ReadyMainDetailedProduct />
      </Suspense>
    </div>
  );
}

export default DetailedProduct;
