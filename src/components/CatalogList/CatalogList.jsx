import CarDetails from 'components/CarDetails/CarDetails';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCars } from 'redux/carsOperations';
import { selectCars } from 'redux/selectors';
import { List, ListItem } from './CatalogList.styled';

const CatalogList = () => {
  const dispatch = useDispatch();
  const { cars, isLoading, error } = useSelector(selectCars);

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  return (
    <List>
      {isLoading && <p>Loading cars...</p>}
      {error && <p>{error}</p>}
      {cars.map(item => (
        <ListItem key={item.id}>
          <CarDetails car={item} />
        </ListItem>
      ))}
    </List>
  );
};

export default CatalogList;