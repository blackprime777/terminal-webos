import "./StartMenu.css";

type StartMenuProps = {
  isOpen: boolean;
  onOpenTerminal: () => void;
};

export default function StartMenu({
  isOpen,
  onOpenTerminal,
}: StartMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="start-menu">
      <h3 className="start-menu-title">
        Terminal WebOS
      </h3>

      <div
        className="start-menu-item"
        onClick={onOpenTerminal}
      >
        🖥️ Terminal
      </div>

      <div className="start-menu-item">
        📊 Dashboard
      </div>

      <div className="start-menu-item">
        ⚙️ Settings
      </div>

      <div className="start-menu-logout">
        🚪 Logout
      </div>
    </div>
  );
}
