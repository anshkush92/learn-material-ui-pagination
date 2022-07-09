// Test -------------------------- Importing the Packages ---------------------------------
import { Pagination } from "@mui/material";

// Test -------------------------- Importing the styles / other components ----------------
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { changePage } from "../../utilities/pageChangeSlice";

// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ----------------------------------
const Paginated = () => {
  const page = useAppSelector((state) => state.pageChange.currentPage);
  const dispatch = useAppDispatch();

  const pageChangeHandler = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    dispatch(changePage(value));
  };

  return (
    <Pagination
      page={page}
      onChange={pageChangeHandler}
      count={1000}
      boundaryCount={2}
      showFirstButton
      showLastButton
    ></Pagination>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default Paginated;
