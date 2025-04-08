import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
      Tee Executive
      </h1>
      <p className="mb-4">
        {
        `Hey, I’m a gameplay programmer who’s been messing around with Unreal Engine
        and C++ for about a year now, trying to make cool gameplay stuff. I’m also
        in school for computer science, learning the techy side of things.Before this,
        I was in the Army for seven years, mostly doing logistics.Now, I’m just 
        excited to code and create.`
        }
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
