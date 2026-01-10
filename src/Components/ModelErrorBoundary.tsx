import { Component, type ReactNode } from "react";

type ModelErrorBoundaryProps = {
  modelPath: string;
  children: ReactNode;
};

type ModelErrorBoundaryState = {
  hasError: boolean;
};

class ModelErrorBoundary extends Component<
  ModelErrorBoundaryProps,
  ModelErrorBoundaryState
> {
  state: ModelErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidUpdate(prevProps: ModelErrorBoundaryProps) {
    if (prevProps.modelPath !== this.props.modelPath && this.state.hasError) {
      this.setState({ hasError: false });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex h-full w-full items-center justify-center bg-slate-900 text-slate-100">
          <div className="max-w-lg px-6 text-center">
            <p className="text-lg font-semibold">3D model failed to load</p>
            <p className="mt-2 text-sm text-slate-300">
              Could not load <span className="font-mono">{this.props.modelPath}</span>.
              Make sure the file exists in <span className="font-mono">public/3D-Model</span>.
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ModelErrorBoundary;
