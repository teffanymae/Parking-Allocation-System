import React from 'react';
import { ParkingSlotTypeLargeContainer } from './styles';
import { LargeParkingSlotType } from '../../../constant/types';

const ParkingSlotTypeLarge = (props: {
  time: number;
  largeParkingSlot: LargeParkingSlotType[];
  handleUnparkClientVehicleLarge: (vechicleTicket: string) => void;
}) => {
  return (
    <ParkingSlotTypeLargeContainer>
      <div className="large-parking-slot">
        <p>
          <b>Large Parking</b>
        </p>
        <ul className="list-group flex-row justify-content-center">
          {props.largeParkingSlot.map(
            (slot: LargeParkingSlotType, index: number) => {
              return (
                <li
                  className="list-group-item"
                  key={index}
                  onClick={(): void =>
                    props.handleUnparkClientVehicleLarge(slot.ticket)
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
    </ParkingSlotTypeLargeContainer>
  );
};

export default ParkingSlotTypeLarge;
