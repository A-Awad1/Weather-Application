import "./index.scss";
import AppContent from "../AppContent";
import AppHeader from "../AppHeader";

export default function MainLayout() {
  return (
    <section className="layout">
      <div className="container">
        <AppHeader />
        <AppContent />
      </div>
    </section>
  );
}
