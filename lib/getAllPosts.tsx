export default async function getAllPosts() {
    try {
 
      const res = await fetch("https://basic-blog.teamrabbil.com/api/post-newest");
      if (!res.ok) {
        throw new Error("Error fetching posts");
      }
      const data = await res.json();
      console.log("Response data:", data); // Log the received data
      return data;
    } catch (error) {
      console.error("Fetch error:", error);
      throw error;
    }
  }

  