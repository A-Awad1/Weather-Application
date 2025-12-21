import "./index.scss";

export default function ConnectFailed() {
  return (
    <section className="connect-failed">
      <div>
        <img src="/general-icons/icon-error.svg" alt="error icon" />
        <h2>Something went wrong</h2>
        <p>We couldn't connect to the server (API error). Please try again in a few moments.</p>
        <button>
          <img src="/general-icons/icon-retry.svg" alt="retry icon" />
          retry
        </button>
      </div>
    </section>
  );
}
