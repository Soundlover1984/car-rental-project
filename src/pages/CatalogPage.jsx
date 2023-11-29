import CatalogList from 'components/CatalogList/CatalogList';
import LoadMoreButton from 'components/LoadMoreButton/LoadMoreButton';
import FilterForm from 'components/FilterForm/FilterForm';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFirstPage, getAllCarsForFilter } from 'redux/carsOperations';
import { selectCars } from 'redux/selectors';
import { selectFilter } from 'redux/selectors';
import { getFilteredCars } from 'helpers/getFilteredCars';
import Loader from 'components/Loader/Loader';

const Catalog = () => {

  const dispatch = useDispatch();
  const { cars, isLoading } = useSelector(selectCars);
  const [showButton, setShowButton] = useState(false);
  const [page, setPage] = useState(1);
  const filter = useSelector(selectFilter);
  const [filterCars, setFilterCars] = useState([]);
  const [filtering, setFiltering] = useState(false);

  useEffect(() => {
    if (page === 1) {
      dispatch(getFirstPage());
      setShowButton(true);
    }
  }, [dispatch, page]);

  
  useEffect(() => {
    if (filtering) {
      (async () => {
        const { payload } = await dispatch(getAllCarsForFilter());
        const visibleCars = await getFilteredCars(payload, filter);
        setFilterCars(visibleCars);
      })();
    }
  }, [filtering, filter, dispatch]);

  return (
    <section>
        <FilterForm
        setFilterCars={setFilterCars}
        setFiltering={setFiltering}
        setShowButton={setShowButton}
      />
       {filtering ? (
        filterCars.length === 0 ? (
          <p>
            Apologies, no results were found here. Consider adjusting your search parameters for better outcomes...
          </p>
        ) : (
          <CatalogList carsArray={filterCars} />
        )
      ) : (
        <CatalogList carsArray={cars} />
      )}


      {!filtering &&
        (isLoading ? (
          <Loader />
        ) : (
          showButton && (
            <LoadMoreButton
              page={page}
              setPage={setPage}
              setShowButton={setShowButton}
            />
          )
        ))}
    </section>
  );
};

export default Catalog;