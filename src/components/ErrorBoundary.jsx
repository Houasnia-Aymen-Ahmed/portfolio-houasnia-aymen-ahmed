import React from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details for debugging
    console.error("ErrorBoundary caught an error:", error, errorInfo);

    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-light-bg dark:bg-dark-bg">
          <div className="max-w-md w-full mx-4 p-6 bg-light-bg-alt dark:bg-dark-bg-alt rounded-lg shadow-lg border border-light-border dark:border-dark-border">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-red-600 dark:text-red-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>

              <h2 className="text-xl font-semibold text-light-text-primary dark:text-dark-text-primary mb-2">
                Oops! Something went wrong
              </h2>

              <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6">
                We're sorry, but something unexpected happened. Please try
                refreshing the page or contact support if the problem persists.
              </p>

              <div className="space-y-3">
                <button
                  onClick={this.handleRetry}
                  className="w-full bg-accent-primary hover:bg-accent-primary-darker text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
                >
                  Try Again
                </button>

                <button
                  onClick={() => window.location.reload()}
                  className="w-full bg-light-bg-alt dark:bg-dark-bg-alt hover:bg-light-border dark:hover:bg-dark-border text-light-text-primary dark:text-dark-text-primary font-medium py-2 px-4 rounded-md border border-light-border dark:border-dark-border transition-colors duration-200"
                >
                  Refresh Page
                </button>
              </div>

              {process.env.NODE_ENV === "development" && this.state.error && (
                <details className="mt-6 text-left">
                  <summary className="cursor-pointer text-sm text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text-primary dark:hover:text-dark-text-primary">
                    Error Details (Development)
                  </summary>
                  <div className="mt-2 p-3 bg-red-50 dark:bg-red-900/10 rounded-md border border-red-200 dark:border-red-800">
                    <pre className="text-xs text-red-800 dark:text-red-200 whitespace-pre-wrap overflow-auto max-h-32">
                      {this.state.error && this.state.error.toString()}
                      {this.state.errorInfo.componentStack}
                    </pre>
                  </div>
                </details>
              )}
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
