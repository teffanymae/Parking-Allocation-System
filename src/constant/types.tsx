export interface ClientTotalType {
  id: number;
  vehicle: string;
  vehicleType: 'S' | 'M' | 'L';
  entranceType: 'N' | 'W' | 'E';
  ticket: string;
  status: 'entered' | 'no availability';
}

export interface NorthEntanceType {
  ticket: string;
}

export interface WestEntanceType {
  ticket: string;
}

export interface EastEntanceType {
  ticket: string;
}

export interface SmallParkingSlotType {
  status: 'available' | 'occupied';
  parkingType: 'SP';
  ticket: string;
}

export interface MediumParkingSlotType {
  status: 'available' | 'occupied';
  parkingType: 'SP' | 'MP';
  ticket: string;
}

export interface LargeParkingSlotType {
  status: 'available' | 'occupied';
  parkingType: 'SP' | 'MP' | 'LP';
  ticket: string;
}
