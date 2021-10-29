import React from 'react';
import { ParkingSlotTypeMediumContainer } from './styles';
import { MediumParkingSlotType } from '../../../constant/types';

const ParkingSlotTypeMedium = (props: {
  time: number;
  mediumParkingSlot: MediumParkingSlotType[];
  handleUnparkClientVehicleMedium: (vechicleTicket: string) => void;
}) => {
  return (
    <ParkingSlotTypeMediumContainer>
      <div className="medium-parking-slot">
        <p>
          <b>Medium Parking</b>
        </p>
        <ul className="list-group flex-row justify-content-center">
          {props.mediumParkingSlot.map(
            (slot: MediumParkingSlotType, index: number) => {
              return (
                <li
                  className="list-group-item"
                  key={index}
                  onClick={(): void =>
                    props.handleUnparkClientVehicleMedium(slot.ticket)
                  }
                >
                  {slot.ticket} {slot.parkingType} <br />
                  {slot.status} <br />
                  {`${Math.floor(Number(props.time) / 60)}:${(
                    Number(props.time) % 60
                  )
                    .toString()
                    .padStart(2, '0')}`}
                </li>
              );
            }
          )}
        </ul>
      </div>
    </ParkingSlotTypeMediumContainer>
  );
};

export default ParkingSlotTypeMedium;
