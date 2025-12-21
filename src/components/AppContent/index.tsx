import ConnectFailed from "./ConnectFailed";
import ConnectSuccess from "./ConnectSuccess";

export default function AppContent() {
  const success = true;
  if (success) return <ConnectSuccess />;
  return <ConnectFailed />;
}
