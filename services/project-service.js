async function fetchProjects(type) {
  try {
    let response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/projects/${type}`
    );
    let data = await response.json();

    // Throw error if request is not successful.
    if (!data.success) {
      throw data.message;
    }

    return data.data;
  } catch (ex) {
    console.error(ex);
    return [];
  }
}

module.exports = { fetchProjects };
