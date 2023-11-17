import CarDetails from 'components/CarDetails/CarDetails';
import { List, ListItem } from './CatalogList.styled';

const CatalogList = ({carsArray}) => {
 
  return (
    <List>
        {carsArray.map(item => (
        <ListItem key={item.id}>
          <CarDetails car={item} />
        </ListItem>
      ))}
    </List>
  );
};

export default CatalogList;