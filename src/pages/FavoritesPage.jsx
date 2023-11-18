import CatalogList from 'components/CatalogList/CatalogList';
import { useSelector } from 'react-redux';
import { selectFavorite } from 'redux/selectors';
import EmptySection from 'components/EmptySection/EmptySection';


const Favorites = () => {
    const { favoriteCars } = useSelector(selectFavorite);
    return (
        <section>
                <h1>Favorite Cars</h1>
      {favoriteCars.length > 0 ? (
        <CatalogList carsArray={favoriteCars} />
      ) : (
        <EmptySection />
      )}
        </section>
      );
};

export default Favorites;