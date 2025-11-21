import { useEffect, useState } from "react";

export default function Settings() {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    const load = async () => {
      const res = await fetch("/data/settings.json");
      const data = await res.json();
      setSettings(data);
    };
    load();
  }, []);

  if (!settings) return <p>Instellingen laden…</p>;

  return (
    <section aria-labelledby="settings-title">
      <h2 id="settings-title">Instellingen</h2>
      <form className="rec-form">
        <label>
          Taal
          <select value={settings.language} disabled>
            <option value="nl">Nederlands</option>
            <option value="en">Engels</option>
          </select>
        </label>

        <label>
          Meldingen
          <input type="checkbox" checked={settings.notifications} readOnly />{" "}
          E-mailmeldingen
        </label>

        <label>
          Donkere modus
          <input type="checkbox" checked={settings.darkMode} readOnly /> Donker
          thema
        </label>

        <label>
          Standaardregio
          <input type="text" value={settings.defaultRegion} readOnly />
        </label>
      </form>
    </section>
  );
}
