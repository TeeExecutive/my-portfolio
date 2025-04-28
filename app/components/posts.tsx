import Link from 'next/link';
import { formatDate, getBlogPosts } from 'app/blog/utils';
import { useMemo } from 'react';
import { BlogPost, Metadata } from "app/blog/utils";

function groupPostsByTag(posts: BlogPost[]): Record<string, BlogPost[]> {
  return posts.reduce((acc, post) => {
    const { tag } = post.metadata;
    if (!acc[tag]) {
      acc[tag] = [];
    }
    acc[tag].push(post);
    return acc;
  }, {} as Record<string, BlogPost[]>);
}

export function BlogPosts() {
  const allBlogs: BlogPost[] = useMemo(() => getBlogPosts(), []);

  const postsGroupedByTag = useMemo(() => groupPostsByTag(allBlogs), [allBlogs]);

  return (
    <div>
      {Object.entries(postsGroupedByTag)
      // Sort the tags alphabetically, but make sure "Gameplay Programming" is always first
      .sort (([tagA], [tagB]) => {
        if (tagA === "Gameplay Programming") return -1;
        if (tagB === "Gameplay Programming") return 1;
        return tagA.localeCompare(tagB);
      })
      .map(([tag, posts]) => (
        <div key={tag} className="mb-8">
          <h4 className="mb-0 text-xl">{tag}</h4>
          <p className="text-xs mb-2 font-light text-neutral-200">
            {posts.length} {posts.length === 1 ? 'post' : 'posts'}
          </p>
          <hr className="w-[40%] text-neutral-600" />
          <br />
          {posts.map((post) => (
            <Link
              key={post.slug}
              className="flex flex-col space-y-1 mb-4"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                <p className="text-neutral-600 dark:text-neutral-400 w-[auto] pr-2 tabular-nums">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
                <p className="underline text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-400 tracking-tight">
                  {post.metadata.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}
