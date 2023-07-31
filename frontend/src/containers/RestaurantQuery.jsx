import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuery } from '../features/querySlice';
import { updateRest } from '../features/restaurantsSlice';

const RestaurantQuery = () => {
  // create an action for one drop-down
  const query = useSelector((state) => state.query);
  const dispatch = useDispatch();

  /*
- query will include all of the query selectors we need to filter our restaurants
- get request to restaurants with the query parameters
- call updateRest and set to new list of restaurants

*/

  return (
    <div>
      <form>
        <label htmlFor='restaurant'>Restaurant</label>
        <input
          placeholder='restaurant name...'
          name='restaurant'
          type='text'
          id='restaurantName'
          onChange={(e) => dispatch(updateQuery(['name', e.target.value]))}
        />

        <label htmlFor='cuisine'>
          Cuisine
          <select
            name='cuisine'
            id='cuisineSelector'
            onChange={(e) => dispatch(updateQuery(['cuisine', e.target.value]))}
          >
            <option value=''>select</option>
            <option value='Mexican'>Mexican</option>
            <option value='Indian'>Indian</option>
            <option value='American'>American</option>
            <option value='Italian'>Italian</option>
            <option value='Chinese'>Chinese</option>
            <option value='Korean'>Korean</option>
            <option value='Japanese'>Japanese</option>
          </select>
        </label>

        <label htmlFor='ambience'>Ambience
          <select
            name='ambience'
            id='ambienceSelector'
            onChange={(e) =>
              dispatch(updateQuery(['ambience', e.target.value]))
            }
          >
            <option value=''>select</option>
            <option value='date night'>Date Night</option>
            <option value='trendy'>Trendy</option>
            <option value='litty'>Litty</option>
            <option value='friendly'>Friendly</option>
            <option value='country'>Country</option>
          </select>
        </label>

        <label htmlFor="price-tier">Price Tier
          <select
            name='price-tier'
            id='priceSelector'
            onChange={(e) => dispatch(updateQuery(['priceTier', e.target.value]))}
          >
              <option value=''>select</option>
              <option value='exquisite'>Exquisite</option>
              <option value='splurge'>Splurge</option>
              <option value='affordable'>Affordable</option>
              <option value='thrifty'>Thrifty</option>
              <option value='dirt cheap'>Dirt Cheap</option>
            </select>
          </label>

        <label htmlFor='plantBase'>Plant-Based?</label>
        <input
          label='vegetarian/vegan options?'
          type='checkbox'
          name='plantBase'
          id='plantBase'
          // format={(v) => v === '1'}
          // normalize={(v) => (v ? '1' : '0')}
          onChange={(e) =>
            dispatch(updateQuery(['plantBase', e.target.value ? '1' : '0']))
          }
        />

        <label htmlFor='goodGroups'>Good for Groups?</label>
        <input
          label='good for groups?'
          type='checkbox'
          name='goodGroups'
          id='goodGroups'
          // format={(v) => v === '1'}
          // normalize={(v) => (v ? '1' : '0')}
          onChange={(e) =>
            dispatch(updateQuery(['goodGroups', e.target.value ? '1' : '0']))
          }
        />
        <label htmlFor="locationRad">Location Radius</label>
        <select
          name='Location'
          id='locationRadius'
          onChange={(e) =>
            dispatch(updateQuery(['locationRad', e.target.value]))
          }
        >
          <option value='5km'>5 km</option>
          <option value='10km'>10 km</option>
          <option value='15km'>15 km</option>
          <option value='20km'>20 km</option>
          <option value='25km'>25 km</option>
        </select>
      </form>
    </div>
  );
};
/*
Location input field removed
 <input
  type='text'
  id='zipCode'
  placeholder='zipcode'
  onChange={(e) => dispatch(updateQuery(['zipCode', e.target.value]))}
/> */

// fields:
export default RestaurantQuery;
