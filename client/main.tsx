import "./global.css";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ErrorBoundary } from "./components/ErrorBoundary";
import "./lib/debug";

console.log("🚀 App initialization started");

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

console.log("✅ Root element found:", rootElement);

try {
  console.log("🔧 Creating React root...");
  const root = createRoot(rootElement);
  console.log("✅ React root created successfully");

  console.log("🎨 Rendering app...");
  root.render(
    <ErrorBoundary>
      <App />
    </ErrorBoundary>,
  );
  console.log("✅ App rendered successfully");
} catch (error) {
  console.error("❌ Failed to render app:", error);
  throw error;
}
