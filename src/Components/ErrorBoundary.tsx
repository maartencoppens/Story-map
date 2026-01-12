import React from "react";
import type { ModelErrorBoundaryProps } from "../types/types";

class ErrorBoundary extends React.Component<
  ModelErrorBoundaryProps,
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    // Optioneel: loggen naar Sentry/console
    console.error("3D scene error:", error);
  }

  render() {
    if (this.state.hasError) return <h1>Something went wrong.</h1>;
    return this.props.children;
  }
}

export default ErrorBoundary;
