export const ColumnVariants = [
  'flatsNumber',
  'floor',
  'residents',
  'monthlyPayments',
  'lastMaintenance',
  'building',
  'flat',
  'status',
  'payment',
  'deadline',
  'payments',
  'contactDetails',
] as const;

export type ColumnVariant = (typeof ColumnVariants)[number];

export type ColumnVariantsType = {
  [key in ColumnVariant]: string;
};

export const COLUMN_VARIANTS: ColumnVariantsType = {
  flatsNumber: 'Flats Number',
  floor: 'Floor',
  residents: 'Residents',
  monthlyPayments: 'Monthly Payments',
  lastMaintenance: 'Last Maintenance',
  building: 'Building',
  flat: 'Flat',
  status: 'Status',
  payment: 'Payment',
  deadline: 'Deadline',
  payments: 'Payments',
  contactDetails: 'Contact Details',
} as const;

export type nodesTypes = {
  building?: string;
  flat?: string;
  status?: Element;
  payment?: string;
  deadline?: Date;
  flatsNumber?: number;
  floor?: number;
  residents?: string[];
  monthlyPayments?: Element;
  lastMaintenance?: Date;
  payments?: Element;
  contactDetails?: string;
  id: number;
};

export type GenericTableProps = { nodes: nodesTypes[]; isSelect: boolean };
