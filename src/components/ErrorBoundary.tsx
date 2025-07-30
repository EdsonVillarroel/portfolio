import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

/**
 * Error Boundary component for graceful error handling
 * Catches JavaScript errors anywhere in the child component tree
 */
export class ErrorBoundary extends Component<Props, State> {

    constructor (props: Props) {

        super(props);
        this.state = {"hasError": false};

    }

    static getDerivedStateFromError (error: Error): State {

        // Update state so the next render will show the fallback UI
        return {"hasError": true,
            error};

    }

    componentDidCatch (error: Error, errorInfo: ErrorInfo) {

        // Log error to console or error reporting service
        console.error("Error caught by boundary:", error, errorInfo);

        // You can also log the error to an error reporting service here
        // Example: logErrorToService(error, errorInfo);

    }

    render () {

        if (this.state.hasError) {

            // You can render any custom fallback UI
            return this.props.fallback || (
                <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
                    <div className="text-center p-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Algo salió mal
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
              Ha ocurrido un error inesperado. Por favor, recarga la página.
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                        >
              Recargar página
                        </button>
                    </div>
                </div>
            );

        }

        return this.props.children;

    }

}
