interface IFallbackProps {
  error: any;
  resetErrorBoundary?: any;
}

function FallbackComponent({ error, resetErrorBoundary }: IFallbackProps) {
  return (
    <div role="alert">
      <p>Something went wrong...</p>
      {/* <pre>{error?.message}</pre> */}
      {/* <button onClick={resetErrorBoundary}>Try again</button> */}
    </div>
  );
}

export default FallbackComponent;
