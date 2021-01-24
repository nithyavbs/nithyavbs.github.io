import './App.css';

function AppLoginForm() {
  return (
    <div className="AppLoginForm">
      <h1>Login form</h1>
      {/* <form>
          <label>User name:</label>
          <input type="text" name="username"></input>
          <label>Password:</label>
          <input type="password" name="password"></input>
          <button>sign in</button>
      </form> */}
      <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"></input>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  );
}

export default AppLoginForm;
