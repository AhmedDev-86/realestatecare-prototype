export async function fetchInspections() {
  const response = await fetch("/data/inspections.json");
  if (!response.ok) {
    throw new Error("Failed to fetch inspections");
  }
  return response.json();
}
