import React from 'react';
import { EntranceTypeEastContainer } from './styles';
import { EastEntanceType } from '../../../constant/types';

const EntranceTypeEast = (props: { eastEntrance: EastEntanceType[] }) => {
  return (
    <EntranceTypeEastContainer>
      <div className="east-entrance">
        <p>
          <b>East Entrance</b>
        </p>
        <ul className="list-group">
          {props.eastEntrance.map((vehicle: EastEntanceType, index: number) => {
            return (
              <li className="list-group-item" key={index}>
                {vehicle.ticket}
              </li>
            );
          })}
        </ul>
      </div>
    </EntranceTypeEastContainer>
  );
};

export default EntranceTypeEast;
