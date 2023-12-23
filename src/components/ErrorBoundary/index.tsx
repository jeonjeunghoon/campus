import { Component, PropsWithChildren, ReactElement } from 'react';

type Props = {
  onReset?: () => void;
  fallback?: ReactElement;
} & PropsWithChildren;

type Info = {
  componentStack: string;
};

type State = {
  hasError: boolean;
  error: Error | null;
  info: Info | null;
};

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      info: null,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: Error, info: Info) {
    this.setState({ error, info });

    // const { onReset } = this.props;

    // if (onReset) {
    //   onReset();
    // }
  }

  render() {
    const { hasError } = this.state;
    const { fallback, children } = this.props;

    const fallbackComponent = fallback ?? <div>에러 발생</div>;

    return hasError ? fallbackComponent : children;
  }
}
