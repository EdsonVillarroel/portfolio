export const fetchRepositories = async (username) => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`
    );
    if (!response.ok) throw new Error("Failed to fetch repositories");
    return await response.json();
  } catch (error) {
    console.error("Error fetching repositories:", error);
    return [];
  }
};
