import React, { useState, useEffect } from 'react';

import { Row, Col } from 'reactstrap';
import { DashboardContainer } from './styles';

import ClientVehicle from '../client-vehicle';
import TotalClient from '../total-client';

import EntranceTypeNorth from '../entrance-type/entrance-type-north';
import EntranceTypeWest from '../entrance-type/entrance-type-west';
import EntranceTypeEast from '../entrance-type/entrance-type-east';

import ParkingSlotTypeLarge from '../parking-slot-type/parking-slot-type-large';
import ParkingSlotTypeMedium from '../parking-slot-type/parking-slot-type-medium';
import ParkingSlotTypeSmall from '../parking-slot-type/parking-slot-type-small';

import {
  ClientTotalType,
  EastEntanceType,
  LargeParkingSlotType,
  MediumParkingSlotType,
  NorthEntanceType,
  SmallParkingSlotType,
  WestEntanceType,
} from '../../constant/types';

const Dashboard = () => {
  const [clientId, setVehicleId] = useState<number>(1);
  const [clientTotal, setClientTotal] = useState<ClientTotalType[]>([]);

  const [northEntrance, setNorthEntrance] = useState<NorthEntanceType[]>([]);
  const [westEntrance, setWestEntrance] = useState<WestEntanceType[]>([]);
  const [eastEntrance, setEastEntrance] = useState<EastEntanceType[]>([]);

  const [time, setTime] = useState<number>(0);

  const [smallParkingSlot, setSmallParkingSlot] = useState<
    SmallParkingSlotType[]
  >([]);
  const [mediumParkingSlot, setMediumParkingSlot] = useState<
    MediumParkingSlotType[]
  >([]);
  const [largeParkingSlot, setLargeParkingSlot] = useState<
    LargeParkingSlotType[]
  >([]);

  const vehicleType: Array<'S' | 'M' | 'L'> = ['S', 'M', 'L'];
  const entranceType: Array<'N' | 'W' | 'E'> = ['N', 'W', 'E'];
  const parkingType: Array<'SP' | 'MP' | 'LP'> = ['SP', 'MP', 'LP'];

  const clientVehicleType: 'S' | 'M' | 'L' =
    vehicleType[Math.floor(Math.random() * vehicleType.length)];
  const clientEntranceType: 'N' | 'W' | 'E' =
    entranceType[Math.floor(Math.random() * entranceType.length)];

  const vehicleFee = 40;

  const SmallParkingSlotTotal = 4;
  const MediumParkingSlotTotal = 4;
  const LargeParkingSlotTotal = 4;

  const SmallParkingSlotExceedRatePerHour = 20;
  const MediumParkingSlotExceedRatePerHour = 60;
  const LargeParkingSlotExceedRatePerHour = 100;

  const ExceedFeePerDay = 5000;

  const handleClientVehicle = () => {
    let clientVehicle = {
      id: clientId,
      vehicle: `Vehicle${clientId}`,
      vehicleType: clientVehicleType,
      entranceType: clientEntranceType,
      ticket: `Vehicle${clientId}` + clientVehicleType,
    };

    const handleClientVehicleEntered = (): void =>
      setClientTotal((prevState: ClientTotalType[]) => [
        ...prevState,
        { ...clientVehicle, status: 'entered' },
      ]);
    if (clientVehicle.entranceType === 'N') {
      setNorthEntrance((prevState: NorthEntanceType[]) => [
        ...prevState,
        { ...clientVehicle },
      ]);
    } else if (clientVehicle.entranceType === 'W') {
      setWestEntrance((prevState: WestEntanceType[]) => [
        ...prevState,
        { ...clientVehicle },
      ]);
    } else if (clientVehicle.entranceType === 'E') {
      setEastEntrance((prevState: EastEntanceType[]) => [
        ...prevState,
        { ...clientVehicle },
      ]);
    }

    const handleClientVehicleNoAvailability = (): void =>
      setClientTotal((prevState: ClientTotalType[]) => [
        ...prevState,
        { ...clientVehicle, status: 'no availability' },
      ]);

    const handleSmallParkingSlot = (): void =>
      setSmallParkingSlot((prevState: SmallParkingSlotType[]) => [
        ...prevState,
        { status: 'occupied', parkingType: 'SP', ticket: clientVehicle.ticket },
      ]);

    const handleMediumParkingSlot = (): void =>
      setMediumParkingSlot((prevState: MediumParkingSlotType[]) => [
        ...prevState,
        { status: 'occupied', parkingType: 'MP', ticket: clientVehicle.ticket },
      ]);

    const handleLargeParkingSlot = (): void =>
      setLargeParkingSlot((prevState: LargeParkingSlotType[]) => [
        ...prevState,
        { status: 'occupied', parkingType: 'LP', ticket: clientVehicle.ticket },
      ]);

    setVehicleId(clientId + 1);

    if (
      smallParkingSlot.length === 4 &&
      mediumParkingSlot.length === 4 &&
      largeParkingSlot.length === 4
    ) {
      handleClientVehicleNoAvailability();
      alert(`Full Parking Slot!!`);
    } else {
      if (clientVehicle.entranceType === 'N') {
        if (clientVehicle.vehicleType === 'S') {
          if (mediumParkingSlot.length < 4) {
            handleClientVehicleEntered();
            handleMediumParkingSlot();
          } else if (largeParkingSlot.length < 4) {
            handleClientVehicleEntered();
            handleLargeParkingSlot();
          } else if (smallParkingSlot.length < 4) {
            handleClientVehicleEntered();
            handleSmallParkingSlot();
          } else {
            handleClientVehicleNoAvailability();
            alert(
              `No Available Parking Slot for vehicle type ${clientVehicle.vehicleType}`
            );
          }
        } else if (clientVehicle.vehicleType === 'M') {
          if (mediumParkingSlot.length < 4) {
            handleClientVehicleEntered();
            handleMediumParkingSlot();
          } else if (largeParkingSlot.length < 4) {
            handleClientVehicleEntered();
            handleLargeParkingSlot();
          } else {
            handleClientVehicleNoAvailability();
            alert(
              `No Available Parking Slot for vehicle type ${clientVehicle.vehicleType}`
            );
          }
        } else if (clientVehicle.vehicleType === 'L') {
          if (largeParkingSlot.length < 4) {
            handleClientVehicleEntered();
            handleLargeParkingSlot();
          } else {
            handleClientVehicleNoAvailability();
            alert(
              `No Available Parking Slot for vehicle type ${clientVehicle.vehicleType}`
            );
          }
        }
      } else if (clientVehicle.entranceType === 'W') {
        if (clientVehicle.vehicleType === 'S') {
          if (smallParkingSlot.length < 4) {
            handleClientVehicleEntered();
            handleSmallParkingSlot();
          } else if (largeParkingSlot.length < 4) {
            handleClientVehicleEntered();
            handleLargeParkingSlot();
          } else if (mediumParkingSlot.length < 4) {
            handleClientVehicleEntered();
            handleMediumParkingSlot();
          } else {
            handleClientVehicleNoAvailability();
            alert(
              `No Available Parking Slot for vehicle type ${clientVehicle.vehicleType}`
            );
          }
        } else if (clientVehicle.vehicleType === 'M') {
          if (largeParkingSlot.length < 4) {
            handleClientVehicleEntered();
            handleLargeParkingSlot();
          } else if (mediumParkingSlot.length < 4) {
            handleClientVehicleEntered();
            handleMediumParkingSlot();
          } else {
            handleClientVehicleNoAvailability();
            alert(
              `No Available Parking Slot for vehicle type ${clientVehicle.vehicleType}`
            );
          }
        } else if (clientVehicle.vehicleType === 'L') {
          if (largeParkingSlot.length < 4) {
            handleClientVehicleEntered();
            handleLargeParkingSlot();
          } else {
            handleClientVehicleNoAvailability();
            alert(
              `No Available Parking Slot for vehicle type ${clientVehicle.vehicleType}`
            );
          }
        }
      } else if (clientVehicle.entranceType === 'E') {
        if (clientVehicle.vehicleType === 'S') {
          if (smallParkingSlot.length < 4) {
            handleClientVehicleEntered();
            handleSmallParkingSlot();
          } else if (mediumParkingSlot.length < 4) {
            handleClientVehicleEntered();
            handleMediumParkingSlot();
          } else if (largeParkingSlot.length < 4) {
            handleClientVehicleEntered();
            handleLargeParkingSlot();
          } else {
            handleClientVehicleNoAvailability();
            alert(
              `No Available Parking Slot for vehicle type ${clientVehicle.vehicleType}`
            );
          }
        } else if (clientVehicle.vehicleType === 'M') {
          if (mediumParkingSlot.length < 4) {
            handleClientVehicleEntered();
            handleMediumParkingSlot();
          } else if (largeParkingSlot.length < 4) {
            handleClientVehicleEntered();
            handleLargeParkingSlot();
          } else {
            handleClientVehicleNoAvailability();
            alert(
              `No Available Parking Slot for vehicle type ${clientVehicle.vehicleType}`
            );
          }
        } else if (clientVehicle.vehicleType === 'L') {
          if (largeParkingSlot.length < 4) {
            handleClientVehicleEntered();
            handleLargeParkingSlot();
          } else {
            handleClientVehicleNoAvailability();
            alert(
              `No Available Parking Slot for vehicle type ${clientVehicle.vehicleType}`
            );
          }
        }
      }
    }
  };

  const handleUnparkClientVehicleLarge = (vehicleTicket: string): void => {
    setLargeParkingSlot(
      [...largeParkingSlot].filter(
        (clientVehicle: LargeParkingSlotType) =>
          clientVehicle.ticket !== vehicleTicket
      )
    );
  };
  const handleUnparkClientVehicleMedium = (vehicleTicket: string): void => {
    setMediumParkingSlot(
      [...mediumParkingSlot].filter(
        (clientVehicle: MediumParkingSlotType) =>
          clientVehicle.ticket !== vehicleTicket
      )
    );
  };
  const handleUnparkClientVehicleSmall = (vehicleTicket: string): void => {
    setSmallParkingSlot(
      [...smallParkingSlot].filter(
        (clientVehicle: SmallParkingSlotType) =>
          clientVehicle.ticket !== vehicleTicket
      )
    );
  };

  useEffect(() => {
    const timer = setInterval((): void => {
      setTime((prevCount: number) => prevCount + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [time]);

  return (
    <DashboardContainer className="container-fluid">
      <h1 className="text-center pt-4">Parking Allocating System</h1>
      <div className="new-client">
        <ClientVehicle handleClientVehicle={() => handleClientVehicle()} />
      </div>
      <div className="parking-lot text-center mb-5">
        <Row>
          <Col lg="12" className="north-entrance mb-5">
            <EntranceTypeNorth northEntrance={northEntrance} />
          </Col>
          <Col lg="2" className="west-entrance">
            <EntranceTypeWest westEntrance={westEntrance} />
          </Col>
          <Col className="border">
            <Row lg="2" className="my-5">
              <Col>
                <ParkingSlotTypeLarge
                  time={time}
                  largeParkingSlot={largeParkingSlot}
                  handleUnparkClientVehicleLarge={() =>
                    handleUnparkClientVehicleLarge
                  }
                />
              </Col>
              <Col>
                <ParkingSlotTypeMedium
                  time={time}
                  mediumParkingSlot={mediumParkingSlot}
                  handleUnparkClientVehicleMedium={() =>
                    handleUnparkClientVehicleMedium
                  }
                />
              </Col>
            </Row>
            <Row className="mb-5">
              <ParkingSlotTypeSmall
                time={time}
                smallParkingSlot={smallParkingSlot}
                handleUnparkClientVehicleSmall={() =>
                  handleUnparkClientVehicleSmall
                }
              />
            </Row>
          </Col>
          <Col lg="2" className="east-entrance">
            <EntranceTypeEast eastEntrance={eastEntrance} />
          </Col>
        </Row>
      </div>
      <div className="mall text-center border mb-4 p-4">
        <h2>Object Oriented Mall</h2>
      </div>
      <div className="client-record">
        <TotalClient clientTotal={clientTotal} />
      </div>
    </DashboardContainer>
  );
};

export default Dashboard;
