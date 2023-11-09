import { Component, ErrorInfo, FunctionComponent, ReactNode, createElement } from 'react';

export type FallbackProps = {
  title: string;
  message: string;
};

type Props = {
  children: ReactNode;
  fallback: FunctionComponent<FallbackProps>;
  onReset: () => void;
};

type State = {
  error: Error | null;
};

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // logErrorToMyService(error: Error, info.componentStack);
  }

  render() {
    const { state, props } = this;

    const { error } = state;
    const { fallback, children } = props;

    if (error) {
      return createElement(fallback, {
        title: '페이지를 찾을 수 없습니다',
        message: error.message,
      });
    }

    return children;
  }
}
