import { BlogPosts } from 'app/components/posts'

export default function Page() {

  const resume = [
    {
      title: "Gameplay Programmer",
      timespan: "November 2023 - Current",
      tags: ["Unreal Engine", "C++", "Blueprint"],
      description: "Working on a game project using Unreal Engine, C++, and Blueprint. Focusing on gameplay mechanics and systems.",
    },
    /*
    {
      title: "U.S. Army",
      timespan: "2017 - 2024",
      tags: ["Religious Affairs Specialist", "Logistics"],
      description: "Served in the Army for seven years, handling Religious Affairs and logistics.",
    },
    */
  ]

  return (
    <section>
      <h1 className="mb-2 text-4xl font-bold tracking-tighter">Tee Executive</h1>

      <hr className="mb-6 w-[40%] text-neutral-800" />

      {
        resume.map((job, index) => (
          <div key={index} className="mb-8">
            <h4 className="mb-0 text-xl">{job.title}</h4>
            <p className="text-xs mb-2 font-light text-neutral-200">{job.timespan}</p>
            <p className="mb-2 hidden text-neutral-100">{job.description}</p>
            <p className="text-xs mb-6 font-light text-neutral-200">{job.tags.join(', ')}</p>
          </div>
        ))
      }

<hr className='text-neutral-200' />

      <h4 className="mb-4 mt-8 text-3xl">Projects</h4>
      <div className="my-8">
      
      <h4 className="mb-4 mt-8 text-xl">Gameplay Mechanics</h4>
      <hr className='w-[40%] text-neutral-600' />
      <br />

      <h4 className="mb-4 mt-8 text-xl">Animations</h4>
      <hr className='w-[40%] text-neutral-600' />
      <br />

      <h4 className="mb-4 mt-8 text-xl">Utilized Plugins</h4>
      <hr className='w-[40%] text-neutral-600' />
      <br />

        <BlogPosts />
      </div>
      <hr className='text-neutral-200' />

    </section>
  )
}
