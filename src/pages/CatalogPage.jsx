import CatalogList from 'components/CatalogList/CatalogList';
import LoadMoreButton from 'components/LoadMoreButton/LoadMoreButton';
import FilterForm from 'components/FilterForm/FilterForm';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFirstPage, getAllCarsForFilter } from 'redux/carsOperations';
import { selectCars } from 'redux/selectors';
import { selectFilter } from 'redux/selectors';
import { getFilteredCars } from 'helpers/getFilteredCars';

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
      <CatalogList carsArray={filtering ? filterCars : cars} />
      {!filtering &&
        (isLoading ? (
          <div>Loading cars...</div>
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