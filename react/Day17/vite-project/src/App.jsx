import { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("Please Wait...");
  const [timerKey, setTimerKey] = useState(0);
  const [notificationStatus, setNotificationStatus] = useState(
    "Notifications not enabled"
  );
 
  const handleEnableNotifications = async () => {
    if (!("Notification" in window)) {
      setNotificationStatus("Notifications are not supported");
      return;
    }

    if (Notification.permission === "granted") {
      setNotificationStatus("Notifications enabled 🌿");
      return;
    }

    if (Notification.permission === "denied") {
      setNotificationStatus(
        "Notifications blocked. Enable them in browser settings."
      );
      return;
    }

    const permission = await Notification.requestPermission();

    setNotificationStatus(
      permission === "granted"
        ? "Notifications enabled 🌿"
        : "Notification permission not granted"
    );
  };

  
  useEffect(() => {
    setMessage("Please Wait...");

    const timer = setTimeout(() => {
      setMessage("Welcome to SAM App!");

      if (
        "Notification" in window &&
        Notification.permission === "granted"
      ) {
        new Notification("SAM App 🌿", {
          body: "Welcome! Your 3-second timer has finished.",
        });
      }
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [timerKey]);

  // Restart timer
  const handleRestart = () => {
    setMessage("Please Wait...");
    setTimerKey((prevKey) => prevKey + 1);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#d9eee2] p-4">
      <div className="w-full max-w-md rounded-3xl border-2 border-[#7ca88a] bg-[#f8f5ed] p-8 text-center shadow-xl sm:p-10">

        <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#b7dfc5] text-4xl">
          🌿
        </div>

        <h1 className="mb-2 text-4xl font-extrabold text-[#65452f]">
          SAM App
        </h1>

        <p className="mb-8 text-sm text-[#7b6856]">
          A little welcome, made just for you!
        </p>

        <div
          className={`mb-6 rounded-2xl p-5 ${
            message === "Please Wait..."
              ? "bg-[#e9d9c8] text-[#795438]"
              : "bg-[#c2e6cf] text-[#285c3b]"
          }`}
        >
          <p className="text-xl font-bold sm:text-2xl">
            {message}
          </p>

          {message === "Please Wait..." ? (
            <p className="mt-2 text-sm">
              Getting everything ready...
            </p>
          ) : (
            <p className="mt-2 text-sm">
              You're all set. Enjoy SAM App! 💚
            </p>
          )}
        </div>

        <button
          onClick={handleEnableNotifications}
          className="mb-3 w-full rounded-xl bg-[#648b70] px-6 py-3 font-semibold text-white transition hover:bg-[#4d7258] focus:outline-none focus:ring-4 focus:ring-[#b7dfc5]"
        >
          🔔 Enable Notifications
        </button>

        <p className="mb-5 text-xs text-[#7b6856]">
          {notificationStatus}
        </p>

        <button
          onClick={handleRestart}
          className="w-full rounded-xl bg-[#795438] px-6 py-3 font-semibold text-white shadow-md transition duration-300 hover:scale-105 hover:bg-[#5d3d28] focus:outline-none focus:ring-4 focus:ring-[#b7dfc5]"
        >
          ↻ Restart Timer
        </button>

        <p className="mt-6 text-xs text-[#8a7765]">
          SAM App · Built with React + Tailwind CSS
        </p>
      </div>
    </div>
  );
}

export default App;