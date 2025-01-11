import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store.ts";
import { Toaster } from "./components/ui/toaster.tsx";
createRoot(document.getElementById("root")).render(_jsxs(Provider, { store: store, children: [_jsx(Toaster, {}), _jsx(App, {})] }));
