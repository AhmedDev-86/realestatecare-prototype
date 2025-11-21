import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadInspections } from "../store/inspectionsSlice.js";

export default function OpenInspections() {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.inspections);

  useEffect(() => {
    if (status === "idle") {
      dispatch(loadInspections());
    }
  }, [status, dispatch]);

  const openItems = items.filter((i) => i.status === "open");

  if (status === "loading") return <p>Bezig met laden…</p>;
  if (error) return <p>Fout bij laden: {error}</p>;

  return (
    <section aria-labelledby="open-inspections-title">
      <h2 id="open-inspections-title">Openstaande inspecties</h2>
      {openItems.length === 0 ? (
        <p>Er zijn momenteel geen openstaande inspecties.</p>
      ) : (
        <ul className="rec-list">
          {openItems.map((i) => (
            <li key={i.id} className="rec-card">
              <h3>{i.address}</h3>
              <p>Gepland op: {i.plannedDate}</p>
              <p>Inspecteur: {i.inspector}</p>
              <p>Risiconiveau: {i.riskLevel}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
