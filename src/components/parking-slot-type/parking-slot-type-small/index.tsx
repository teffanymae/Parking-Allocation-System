import React from 'react';
import { ParkingSlotTypeSmallContainer } from './styles';
import { SmallParkingSlotType } from '../../../constant/types';

const ParkingSlotTypeSmall = (props: {
  time: number;
  smallParkingSlot: SmallParkingSlotType[];
  handleUnparkClientVehicleSmall: (vechicleTicket: string) => void;
}) => {
  // const state = useSelector((state: AppState) => state);
  return (
    <ParkingSlotTypeSmallContainer>
      <div className="small-parking-slot">
        <p>
          <b>Small Parking</b>
        </p>
        <ul className="list-group flex-row justify-content-center">
          {props.smallParkingSlot.map(
            (slot: SmallParkingSlotType, index: number) => {
              return (
                <li
                  className="list-group-item"
                  key={index}
                  onClick={(): void =>
                    props.handleUnparkClientVehicleSmall(slot.ticket)
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
    </ParkingSlotTypeSmallContainer>
  );
};

export default ParkingSlotTypeSmall;
