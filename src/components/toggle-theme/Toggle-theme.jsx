function ToggleTheme() {
  const body = document.querySelector("body");
  const toggleTheme = () => {
    body.classList.contains("light-theme")
      ? body.classList.toggle("dark-theme")
      : body.classList.toggle("light-theme");
  };

  return (
    <>
      <div className="app">
        <button
          onClick={() => {
            toggleTheme();
          }}
        >
          Toggle Theme
        </button>
      </div>
    </>
  );
}

export default ToggleTheme;
