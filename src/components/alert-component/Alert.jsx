function Alert({ text }) {
  return (
    <>
      <div className="alert alert-danger" role="alert">
        { text ? text : "OMG! Something really bad has happened!" }
      </div>
    </>
  );
}

export default Alert;
