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
      {/* Title Bar */}
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

      {/* Dashboard Body */}
      <div className="dashboard-body">
        <div className="dashboard-card">
          <strong>🟢 System Status</strong>
          <p>ONLINE</p>
        </div>

        <div className="dashboard-card">
          <strong>💰 Wallet Balance</strong>
          <p>$100.00</p>
        </div>

        <div className="dashboard-card">
          <strong>👛 Wallet Types</strong>

          <ul>
            <li>Bitcoin (BTC)</li>
            <li>Ethereum (ETH)</li>
            <li>Litecoin (LTC)</li>
            <li>Monero (XMR)</li>
            <li>Solana (SOL)</li>
          </ul>
        </div>

        <div className="dashboard-card">
          <strong>🔐 Encrypted BTC Address</strong>

          {isRoot ? (
            <>
              <p>bc1*********************9x</p>
              <small>Encryption unlocked.</small>
            </>
          ) : (
            <>
              <p>████████████████████████████</p>
              <small>Run "root" inside Terminal to unlock.</small>
            </>
          )}
        </div>

        <div className="dashboard-card">
          <strong>🛡 Root Session</strong>

          <p>{isRoot ? "ACTIVE" : "INACTIVE"}</p>
        </div>
      </div>
    </div>
  );
}
