import React from 'react';
import { EntranceTypeWestContainer } from './styles';
import { WestEntanceType } from '../../../constant/types';

const EntranceTypeWest = (props: { westEntrance: WestEntanceType[] }) => {
  return (
    <EntranceTypeWestContainer>
      <div className="west-entrance">
        <p>
          <b>West Entrance</b>
        </p>
        <ul className="list-group">
          {props.westEntrance.map((vehicle: WestEntanceType, index: number) => {
            return (
              <li className="list-group-item" key={index}>
                {vehicle.ticket}
              </li>
            );
          })}
        </ul>
      </div>
    </EntranceTypeWestContainer>
  );
};

export default EntranceTypeWest;
