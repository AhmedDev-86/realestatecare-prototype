import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { loginStep1, verifyCode, clearError } from "../store/authSlice.js";
import { Navigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [form, setForm] = useState({ username: "", password: "", code: "" });

  const handleChange = (e) => {
    dispatch(clearError());
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmitStep1 = (e) => {
    e.preventDefault();
    dispatch(
      loginStep1({ username: form.username.trim(), password: form.password })
    );
  };

  const handleSubmitStep2 = (e) => {
    e.preventDefault();
    dispatch(verifyCode({ code: form.code.trim() }));
  };

  if (auth.isAuthenticated) {
    return <Navigate to="/open-inspections" replace />;
  }

  return (
    <div className="rec-login-wrapper">
      <section className="rec-login-card" aria-labelledby="login-title">
        <h1 id="login-title">Inloggen RealEstateCare</h1>
        {auth.error && <p className="rec-error">{auth.error}</p>}

        {auth.step === 1 && (
          <form onSubmit={handleSubmitStep1} noValidate>
            <label>
              Gebruikersnaam
              <input
                name="username"
                value={form.username}
                onChange={handleChange}
                autoComplete="username"
                required
              />
            </label>

            <label>
              Wachtwoord
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                autoComplete="current-password"
                required
              />
            </label>

            <button className="rec-button-primary" type="submit">
              Volgende
            </button>
          </form>
        )}

        {auth.step === 2 && (
          <form onSubmit={handleSubmitStep2}>
            <p>
              Voer de verificatiecode in die naar uw apparaat is verstuurd
              (gesimuleerd: gebruik code <strong>123456</strong>).
            </p>
            <label>
              Verificatiecode
              <input
                name="code"
                value={form.code}
                onChange={handleChange}
                inputMode="numeric"
                pattern="[0-9]*"
                required
              />
            </label>

            <button className="rec-button-primary" type="submit">
              Verifiëren
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
