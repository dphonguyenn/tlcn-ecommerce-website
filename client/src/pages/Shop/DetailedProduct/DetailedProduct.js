import { Suspense, lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { getDetailedDevice } from "../../../redux/actions";
// import { detailedDeviceState } from '../../../redux/selectors';
import { getAbsolutePath } from "../../../helpers";

const ReadyMainDetailedProduct = lazy(() =>
  import("../../../components/MainDetailedProduct/index.js")
);

function DetailedProduct() {
  // const [products, setProducts] = useState(null);
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(
      getDetailedDevice.getDetailedDeviceRequest(
        getAbsolutePath(location.pathname)
      )
    );
  }, [dispatch, location.pathname]);

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
