import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
      Tee Executive
      </h1>
      <p className="mb-4">
        {
        `"Hey, I’m a gameplay programmer working with Unreal Engine and C++, creating awesome games and experiences.
          I’m also currently studying computer science in school. Before this, I served in the Army for seven years, 
          handling Religious Affairs and logistics. Now, I’m thrilled to code and build gameplay mechanics that I’ve 
          always wanted to see in games. Instead of waiting for someone else to make them, I decided to do it myself!"`
        }
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
