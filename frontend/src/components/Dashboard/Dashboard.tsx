import "./Dashboard.css";

type DashboardProps = {
  isRoot: boolean;
  onClose: () => void;
  onMinimize: () => void;
};

export default function Dashboard({
  isRoot,
  onClose,
  onMinimize,
}: DashboardProps) {
  return (
    <div className="dashboard-window">
      <div className="dashboard-titlebar">
        <span>Dashboard</span>

        <div>
          <button
            className="dashboard-button"
            onClick={onMinimize}
            title="Minimize"
          >
            🗕
          </button>

          <button
            className="dashboard-button"
            onClick={onClose}
            title="Close"
          >
            ✕
          </button>
        </div>
      </div>

      <div className="dashboard-body">
        {!isRoot ? (
          <>
            <h2>Dashboard Locked</h2>

            <p>
              Run the following command inside Terminal:
            </p>

            <pre>$ root</pre>
          </>
        ) : (
          <>
            <h2>Root Dashboard</h2>

            <div className="dashboard-card">
              <strong>System Status</strong>
              <p>🟢 ONLINE</p>
            </div>

            <div className="dashboard-card">
              <strong>Wallet Balance</strong>
              <p>$900.00</p>
            </div>

            <div className="dashboard-card">
              <strong>Wallet Types</strong>

              <ul>
                <li>Bitcoin (BTC)</li>
                <li>Ethereum (ETH)</li>
                <li>Litecoin (LTC)</li>
                <li>Monero (XMR)</li>
                <li>Solana (SOL)</li>
              </ul>
            </div>

            <div className="dashboard-card">
              <strong>Encrypted BTC Address</strong>

              <p>
                bc1*********************9x
              </p>
            </div>

            <div className="dashboard-card">
              <strong>Root Session</strong>

              <p>ACTIVE</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
