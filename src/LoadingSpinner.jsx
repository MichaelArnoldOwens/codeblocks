const LoadingSpinner = () => {
  const spinnerContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // height: '100vh', // Full viewport height
  };

  const spinnerStyle = {
    width: '40px',
    height: '40px',
    border: '4px solid rgba(0, 0, 0, 0.1)',
    borderLeftColor: '#22a6b3', // Customize the spinner color
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  };

  return (
    <div style={spinnerContainerStyle}>
      <div style={spinnerStyle}></div>
    </div>
  );
};

export default LoadingSpinner;