export default async function getSinglePost(id: any) {
    try {
      const res = await fetch(`https://basic-blog.teamrabbil.com/api/post-details/${id}`);
      const data = await res.json();
  
      if (!res.ok) {
        throw new Error(`Error fetching post. Status: ${res.status} - ${res.statusText}`);
      }
  
      console.log("Response data:", data);
      return data;
    } catch (error) {
      console.error("Fetch error:", error);
      throw error;
    }
  }