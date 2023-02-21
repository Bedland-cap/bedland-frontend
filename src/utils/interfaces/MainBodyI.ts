export interface MainBodyI {
  variant: 'resident' | 'manager';
  logged: boolean;
  children: React.ReactNode;
}
