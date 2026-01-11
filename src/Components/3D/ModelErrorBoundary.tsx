import { Component, type ReactNode } from "react";

class ModelErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex h-full w-full items-center justify-center bg-slate-900 text-slate-100">
          <p>Something went wrong.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ModelErrorBoundary;
