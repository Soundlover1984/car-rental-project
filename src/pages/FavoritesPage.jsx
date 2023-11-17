import CatalogList from 'components/CatalogList/CatalogList';
import { useSelector } from 'react-redux';
import { selectFavorite } from 'redux/selectors';


const Favorites = () => {
    const { favoriteCars } = useSelector(selectFavorite);
    return (
        <section>
          <CatalogList carsArray={favoriteCars} />
        </section>
      );
};

export default Favorites;