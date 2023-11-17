import brands from 'brands.json';

import {
  Filter,
  Input,
  InputWrapper,
  Label,
  LabelMileage,
  Mileage,
  MileageWrapper,
} from './FilterForm.styled';
import Select from 'components/Select/Select';
import { createObjectArray } from 'helpers/createObjectArray';
import { priceArray } from 'helpers/createPriceArray';
import { useState } from 'react';

const FilterForm = () => {
  const [selectedValue, setSelectedValue] = useState({
    value: 'price',
    label: 'To $',
  });
  const [valueBrand, setValueBrand] = useState({
    value: 'brand',
    label: 'Enter the text',
  });

  const brandOptions = createObjectArray(brands);
  const priceOptions = createObjectArray(priceArray);
  const [value, setValue] = useState('');

  const handleChangePrice = selectedOption => {
    const formattedValue = `To ${selectedOption.value}$`;
    setSelectedValue({ label: formattedValue, value: formattedValue });
  };

  const handleChangeBrand = selectedOption => {
    setValueBrand({ label: selectedOption.value, value: selectedOption.value });
  };

  const handleChangeMileage = e => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  return (
    <Filter>
      <Select
        textLabel="Car brand"
        name="brand"
        options={brandOptions}
        value={valueBrand}
        handleChange={handleChangeBrand}
        width={'224px'}
      />
      <Select
        textLabel="Price/ 1 hour"
        name="price"
        options={priceOptions}
        value={selectedValue}
        handleChange={handleChangePrice}
        width={'125px'}
      />
      <MileageWrapper>
        <LabelMileage htmlFor="fromMileage">Сar mileage / km</LabelMileage>
        <Mileage>
          <InputWrapper>
            <Label>From</Label>
            <Input
              type="text"
              name=""
              id="fromMileage"
              onChange={handleChangeMileage}
              //   value={value}
              value={value}
              padding="65px"
            />
          </InputWrapper>
          <InputWrapper>
            <Label>To</Label>
            <Input type="text" name="" id="toMileage" padding="45px" />
          </InputWrapper>
        </Mileage>
      </MileageWrapper>
    </Filter>
  );
};

export default FilterForm;