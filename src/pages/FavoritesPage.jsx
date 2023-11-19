import CatalogList from 'components/CatalogList/CatalogList';
import { useSelector } from 'react-redux';
import { selectFavorite } from 'redux/selectors';
import EmptySection from 'components/EmptySection/EmptySection';
import Title from 'components/Title/Title';


const Favorites = () => {
    const { favoriteCars } = useSelector(selectFavorite);
    return (
        <section>
      <Title title="Favorite Cars" />
      {favoriteCars.length > 0 ? (
        <CatalogList carsArray={favoriteCars} />
      ) : (
        <EmptySection />
      )}
        </section>
      );
};

export default Favorites;