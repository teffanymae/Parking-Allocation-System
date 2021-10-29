import React from 'react';
import { ClientVehicleContainer } from './styles';

const ClientVehicle = (props: { handleClientVehicle: () => void }) => {
  return (
    <ClientVehicleContainer>
      <div className="client-vehicle d-flex justify-content-end">
        <button
          type="button"
          className="btn btn-primary"
          onClick={props.handleClientVehicle}
        >
          Add Client Vehicle
        </button>
      </div>
    </ClientVehicleContainer>
  );
};

export default ClientVehicle;
