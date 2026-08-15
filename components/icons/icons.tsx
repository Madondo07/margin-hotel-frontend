import {
  LayoutDashboard,
  CalendarCheck,
  CreditCard,
  FileText,
  Users,
  ChevronRight,
  Hotel,
  type LucideIcon,
} from 'lucide-react';

export type Icon = LucideIcon;

export const Icons = {
  logo: Hotel,
  dashboard: LayoutDashboard,
  bookings: CalendarCheck,
  payments: CreditCard,
  invoices: FileText,
  staff: Users,
  chevronRight: ChevronRight,
};