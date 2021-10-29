import React from 'react';
import { EntranceTypeNorthContainer } from './styles';
import { NorthEntanceType } from '../../../constant/types';

const EntranceTypeNorth = (props: { northEntrance: NorthEntanceType[] }) => {
  return (
    <EntranceTypeNorthContainer>
      <div className="north-entrance text-center" style={{ width: '50%', margin: '0 auto' }}>
        <p>
          <b>North Entrance</b>
        </p>
        <ul className="list-group flex-row justify-content-center">
          {props.northEntrance.map(
            (vehicle: NorthEntanceType, index: number) => {
              return (
                <li className="list-group-item" key={index}>
                  {vehicle.ticket}
                </li>
              );
            }
          )}
        </ul>
      </div>
    </EntranceTypeNorthContainer>
  );
};

export default EntranceTypeNorth;
