const demoStats = {
  totalBookings: 47,
  guestsCurrentlyStaying: 12,
  pendingInvoices: 5,
  totalRevenue: 84250.00,
};

const recentBookings = [
  { guest: 'Thabo Nkosi', room: '204', checkIn: '2026-08-14', channel: 'ONLINE' },
  { guest: 'Sarah van der Merwe', room: '112', checkIn: '2026-08-13', channel: 'WALK_IN' },
  { guest: 'James Okafor', room: '308', checkIn: '2026-08-13', channel: 'TELEPHONIC' },
  { guest: 'Lindiwe Dlamini', room: '101', checkIn: '2026-08-12', channel: 'ONLINE' },
];

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="border rounded-lg p-4">
          <p className="text-sm text-muted-foreground">Total Bookings</p>
          <p className="text-3xl font-bold">{demoStats.totalBookings}</p>
        </div>
        <div className="border rounded-lg p-4">
          <p className="text-sm text-muted-foreground">Guests Currently Staying</p>
          <p className="text-3xl font-bold">{demoStats.guestsCurrentlyStaying}</p>
        </div>
        <div className="border rounded-lg p-4">
          <p className="text-sm text-muted-foreground">Pending Invoices</p>
          <p className="text-3xl font-bold">{demoStats.pendingInvoices}</p>
        </div>
        <div className="border rounded-lg p-4">
          <p className="text-sm text-muted-foreground">Revenue (This Month)</p>
          <p className="text-3xl font-bold">R{demoStats.totalRevenue.toLocaleString()}</p>
        </div>
      </div>

      <h2 className="text-lg font-semibold mb-3">Recent Bookings</h2>
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b text-left">
            <th className="py-2 pr-4">Guest</th>
            <th className="py-2 pr-4">Room</th>
            <th className="py-2 pr-4">Check-in</th>
            <th className="py-2 pr-4">Channel</th>
          </tr>
        </thead>
        <tbody>
          {recentBookings.map((b, i) => (
            <tr key={i} className="border-b">
              <td className="py-2 pr-4">{b.guest}</td>
              <td className="py-2 pr-4">{b.room}</td>
              <td className="py-2 pr-4">{b.checkIn}</td>
              <td className="py-2 pr-4">
                <span className="text-xs border rounded px-2 py-0.5">{b.channel}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}