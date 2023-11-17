import { useDispatch } from 'react-redux';
import { getCars } from 'redux/carsOperations';
import { Button } from './LoadMoreButton.styled';

const ButtonLoadMore = ({ page, setPage, setShowButton }) => {
  const dispatch = useDispatch();

  const handleLoadMore = async () => {
    const { payload } = await dispatch(getCars(page + 1));
    setPage(prevPage => prevPage + 1);
    if (payload.length >= 12) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  return <Button onClick={handleLoadMore}>Load more</Button>;
};

export default ButtonLoadMore;