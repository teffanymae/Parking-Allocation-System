import React from 'react';
import { TotalClientContainer } from './styles';
import { ClientTotalType } from '../../constant/types';

const TotalClient = (props: { clientTotal: ClientTotalType[] }) => {
  return (
    <TotalClientContainer>
      <div className="total-client text-center mb-5">
        <p>
          <b>Total of Clients Vehicle = {Number(props.clientTotal.length)}</b>
        </p>
        <ul className="list-group" style={{ width: '50%', margin: '0 auto' }}>
          {props.clientTotal.map((client: ClientTotalType, index: number) => {
            return (
              <li className="list-group-item" key={index}>
                {client.vehicle} - {client.vehicleType} - {client.status} -{' '}
                {client.entranceType}
              </li>
            );
          })}
        </ul>
      </div>
    </TotalClientContainer>
  );
};

export default TotalClient;
