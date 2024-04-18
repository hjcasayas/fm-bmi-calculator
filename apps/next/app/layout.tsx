const AppLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>BMI Calculator</title>
      </head>
      <body>
        <div>
          <nav>app-layout works!</nav>
          <main>{children}</main>
        </div>
      </body>
    </html>);
};

export default AppLayout;
