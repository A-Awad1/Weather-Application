import AppContent from "../AppContent";
import AppHeader from "../AppHeader";
import "./index.scss";

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
