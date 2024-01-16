import React, { Component, ReactNode } from "react";

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.setState({ error, errorInfo });
    console.error("Error Boundary captured an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError && this.state.error) {
      return (
        <div className="h-screen bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
          <h1 className="font-bold">Something went wrong</h1>
          <p>{this.state.error.message}</p>
          <details className="mt-4">
            <summary className="cursor-pointer underline">
              Click for more details
            </summary>
            <pre className="overflow-x-auto mt-2 p-2 bg-gray-100 rounded">
              {this.state.error.stack}
              <br />
              {this.state.errorInfo?.componentStack}
            </pre>
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
