'use client';

interface Payment {
  paymentId: number;
  amount: number;
  status: 'SUCCESS' | 'FAILED';
  paymentDate: string;
  invoiceReference: string;
}

const demoPayments: Payment[] = [
  {
    paymentId: 1,
    amount: 1850.0,
    status: 'SUCCESS',
    paymentDate: '2026-08-10',
    invoiceReference: 'INV-1001',
  },
  {
    paymentId: 2,
    amount: 2400.0,
    status: 'SUCCESS',
    paymentDate: '2026-08-12',
    invoiceReference: 'INV-1002',
  },
  {
    paymentId: 3,
    amount: 990.0,
    status: 'FAILED',
    paymentDate: '2026-08-13',
    invoiceReference: 'INV-1003',
  },
];

export default function PaymentsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Payments</h1>
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b text-left">
            <th className="py-2 pr-4">Payment ID</th>
            <th className="py-2 pr-4">Invoice</th>
            <th className="py-2 pr-4">Amount(ZAR)</th>
            <th className="py-2 pr-4">Status</th>
            <th className="py-2 pr-4">Date</th>
          </tr>
        </thead>
        <tbody>
          {demoPayments.map((p) => (
            <tr key={p.paymentId} className="border-b">
              <td className="py-2 pr-4">{p.paymentId}</td>
              <td className="py-2 pr-4">{p.invoiceReference}</td>
              <td className="py-2 pr-4">R{p.amount.toFixed(2)}</td>
              <td className="py-2 pr-4">
                <span
                  className={
                    p.status === 'SUCCESS'
                      ? 'text-green-600 font-medium'
                      : 'text-red-600 font-medium'
                  }
                >
                  {p.status}
                </span>
              </td>
              <td className="py-2 pr-4">{p.paymentDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}