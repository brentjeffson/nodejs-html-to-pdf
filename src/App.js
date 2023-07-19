import "./App.css";

function App({firstname, middlename, lastname}) {
  return (
    <div className="App">
      <form name="form">
        <label htmlFor="firstname">First Name</label>
        <br />
        <input type="text" name="firstname" value={firstname} />
        <br />

        <label htmlFor="middlename">Middle Name</label>
        <br />
        <input type="text" name="middlename" value={middlename} />
        <br />

        <label htmlFor="lastname">Last Name</label>
        <br />
        <input type="text" name="lastname" value={lastname} />
      </form>
    </div>
  );
}

export default App;
