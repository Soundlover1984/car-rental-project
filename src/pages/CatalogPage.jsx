import CatalogList from 'components/CatalogList/CatalogList';
import LoadMoreButton from 'components/LoadMoreButton/LoadMoreButton';
import FilterForm from 'components/FilterForm/FilterForm';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFirstPage } from 'redux/carsOperations';
import { selectCars } from 'redux/selectors';

const Catalog = () => {

  const dispatch = useDispatch();
  const { cars } = useSelector(selectCars);
  const [showButton, setShowButton] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (page === 1) {
      dispatch(getFirstPage());
      setShowButton(true);
    }
  }, [dispatch, page]);

  return (
    <section>
      <FilterForm />
      <CatalogList carsArray={cars} />
      {
        showButton && (
          <LoadMoreButton
            page={page}
            setPage={setPage}
            setShowButton={setShowButton}
          />
        )
      }
    </section>
  );
};

export default Catalog;