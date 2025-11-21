import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadInspections } from "../store/inspectionsSlice.js";

export default function CompletedInspections() {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.inspections);

  useEffect(() => {
    if (status === "idle") {
      dispatch(loadInspections());
    }
  }, [status, dispatch]);

  const completedItems = items.filter((i) => i.status === "completed");

  if (status === "loading") return <p>Bezig met laden…</p>;
  if (error) return <p>Fout bij laden: {error}</p>;

  return (
    <section aria-labelledby="completed-inspections-title">
      <h2 id="completed-inspections-title">Uitgevoerde inspecties</h2>
      {completedItems.length === 0 ? (
        <p>Er zijn nog geen uitgevoerde inspecties.</p>
      ) : (
        <ul className="rec-list">
          {completedItems.map((i) => (
            <li key={i.id} className="rec-card">
              <h3>{i.address}</h3>
              <p>Afgerond op: {i.completedDate}</p>
              <p>Rapportnummer: {i.reportId}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
